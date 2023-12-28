import { Navbar, Hero, Footer } from "../../components"
import Overview from "./Overview"

const Home = () => {
    return (
    <div>
        <div>
            <Navbar />
            <Hero />
        </div>
        <Overview />
        <Footer />
    </div>
    )
}

export default Home