import { Tilt } from "react-tilt";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Components } from "../../constants";
import { SectionWrapper } from "../../HighOrderComponents";
import "./About.css";

const Component = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event, cardIndex) => {
      const { clientX, clientY, currentTarget } = event;
      const boundingBox = currentTarget.getBoundingClientRect();
      const offsetX = Math.min(Math.max(clientX - boundingBox.left, 1), boundingBox.width);
      const offsetY = Math.min(Math.max(clientY - boundingBox.top, 1), boundingBox.height);
      setHoverPosition({ x: offsetX, y: offsetY });
      setHoveredCard(cardIndex);
    };
  
    const handleMouseLeave = () => {
      setHoveredCard(null);
    };
  
    return (
      <section id="componentsHolder">
        <div id="infoHolder">
        <p id="headSubtext">WHAT WE USE</p>
        <h1 id="headTitle">COMPONENTS</h1>
        </div>
        {Components.map((component, index) => (
        <Tilt key={index} options={{ max: 5, scale: 1, speed: 350 }} >
          <motion.div className="componentCardShape" variants={index % 2 === 0 ? fadeIn("right", "spring", 0.5 * index, 0.8) : fadeIn("left", "spring", 0.5 * index, 0.8)}>
          <div
            className={`componentCard ${hoveredCard === index ? "hovered" : "", index % 2 === 0 ? "componentsTypeIRTL" : "componentsTypeILTR"}`}
            onMouseMove={(event) => handleMouseMove(event, index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="textFormation">
              <h3>{component.title}</h3>
              <p>{component.info}</p>
              <a href={component.url} target="_blank" rel="noreferrer">Download Datasheet</a>
            </div>
            <div className="imgFormation">
              <img
                src={component.image}
                alt={component.title}
              />
            </div>
            {hoveredCard === index && (
              <div
                className="hover-circle"
                style={{
                  left: `${hoverPosition.x - 100}px`,
                  top: `${hoverPosition.y - 100}px`,
                }}
              ></div>
            )}
          </div>
          </motion.div>
          </Tilt> ))}
      </section>
    );
  };
  
  export default SectionWrapper(Component, "components");