import {
  /*mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,*/
  discord,
  facebook,
  instagram,
  share,
  mq2,
  mq135,
  arduinoNano33Ble,
  address,
  phone,
  email,
  phoneBall,
  emailBall,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    url: "Home"
  },
  {
    id: "about",
    title: "About",
    url: "About"
  },
  {
    id: "contact",
    title: "Contact",
    url: "Contact"
  },
];

const account = [
  {
    id: "signIn",
    title: "Sign in",
    url: "signin",
  },
  {
    id: "signUp",
    title: "Sign up",
    url: "signup",
  },
];

const SectionsByPage = {
  "/Home": ["overview"],
  "/About": ["services", "skills", "components", "testimonials"],
  "/Contact": ["form"],
}

const socialMedias = [
  {
  id: "facebook",
  title: "Facebook",
  icon: facebook,
  url: "",
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: instagram,
    url: "",
  },
  {
    id: "discord",
    title: "Discord",
    icon: discord,
    url: "",
  },
];

const Feedbacks = [
  {
    author: 'Jack Honso',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: '"Exceptional service from start to finish. The team at WebWise went above and beyond to meet our needs. ' +
    'Communication was excellent, and the end result exceeded our expectations. Highly recommend!"',
    rating: '★★★★★',
    pfp: facebook,
    share: share,
  },
  {
    author: 'Eva Tiramint',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: '"Impressed with the top-notch quality of products/services provided by WebWise. ' +
    'Every interaction with the team showcased professionalism and expertise. A five-star experience all the way!"',
    rating: '★★★★★',
    pfp: facebook,
    share: share,
  },
  {
    author: 'Fedor Klaystes',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: '"Overall, our experience with WebWise was positive. Just and only the communication could have been more consistent. ' +
    'Nonetheless, the end result met our expectations, and we appreciate the efforts put in. Thanks."',
    rating: '★★★★☆',
    pfp: facebook,
    share: share,
  },
  {
    author: 'Ada Wilston',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: '"WebWise has proven to be reliable and efficient. Their attention to detail and commitment to delivering on time is commendable. ' +
    'Our project was handled with precision, resulting in a successful outcome."',
    rating: '★★★★★',
    pfp: facebook,
    share: share,
  },
  {
    author: 'Jan Mulitan',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: '"While working with WebWise, our experience was average. The service provided met basic expectations. ' +
    'With enhancements to communication, WebWise could offer an improved experience for its customers.',
    rating: '★★★☆☆',
    pfp: facebook,
    share: share,
  },
  {
    author: 'Wilston Franz',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: 'A truly customer-centric approach sets WebWise apart. ' +
    'The team was attentive to our needs, responsive to inquiries, and ensured our satisfaction throughout. A pleasure to work with and highly recommended."',
    rating: '★★★★★',
    pfp: facebook,
    share: share,
  },
  {
    author: 'Sophia Gulgovzska',
    title: 'Share Me!',
    date: 'review from xxx (xx.xx.xxxx)',
    feedback: '"Our experience with WebWise was generally satisfactory. However, a few revisions were needed. ' +
    'The service met our expectations, but addressing these issues would enhance the overall customer experience."',
    rating: '★★★★☆',
    pfp: facebook,
    share: share,
  },
]

const Components = [
  {
    title: "MQ2 Sensor",
    info: "the Arduino Nano 33 BLE is a compact, versatile, and powerful development board designed for projects " +
    "that require Bluetooth Low Energy (BLE) connectivity. It is a versatile and feature-rich development board that brings together the capabilities " +
    "of the nRF52840 chip and the Arduino ecosystem, making it well-suited for a wide range of projects, especially those involving BLE communication and IoT applications",
    url: "https://www.pololu.com/file/0J309/MQ2.pdf",
    image: mq2,
  },
  {
    title: "MQ135 Sensor",
    info: "the Arduino Nano 33 BLE is a compact, versatile, and powerful development board designed for projects " +
    "that require Bluetooth Low Energy (BLE) connectivity. It is a versatile and feature-rich development board that brings together the capabilities " +
    "of the nRF52840 chip and the Arduino ecosystem, making it well-suited for a wide range of projects, especially those involving BLE communication and IoT applications",
    url: "https://www.winsen-sensor.com/d/files/PDF/Semiconductor%20Gas%20Sensor/MQ135%20(Ver1.4)%20-%20Manual.pdf",
    image: mq135,
  },
  {
    title: "Arduino Nano 33 Ble",
    info: "the Arduino Nano 33 BLE is a compact, versatile, and powerful development board designed for projects " +
    "that require Bluetooth Low Energy (BLE) connectivity. It is a versatile and feature-rich development board that brings together the capabilities " +
    "of the nRF52840 chip and the Arduino ecosystem, making it well-suited for a wide range of projects, especially those involving BLE communication and IoT applications",
    url: "https://docs.arduino.cc/resources/datasheets/ABX00030-datasheet.pdf",
    image: arduinoNano33Ble,
  },
];

const Contact = [
  {
    address: "Križovatka, 969 01 Banská Štiavnica",
    phone: "+421 915 213 000",
    gmail: "jakub.project@spsjm.eu",
  }
];

const services = [
  {
    title: "Repair and replacement of parts",
    content: "Various repairs, from minor adjustments to replacement of key parts",
    icon: address,
    date: [ " Monday - Friday", " -> ", "8:00 - 18:00 " ],
    points: [
      "a",
      "b",
      "c",
    ],
  },
  {
    title: "Diagnostics and Technical Analysis",
    content: "Thorough diagnostics and technical analysis of the welding machine condition",
    icon: address,
    date: [ " Monday - Friday", " -> ", "8:00 - 18:00 " ],
    points: [
      "a",
      "b",
      "c",
    ],
  },
  {
    title: "Preventive maintenance/ inspection",
    content: "Regular maintenance and inspection of welding machines to prevent possible breakdowns",
    icon: address,
    date: [ " Monday - Friday", " -> ", "8:00 - 18:00 " ],
    points: [
      "a",
      "b",
      "c",
    ],
  },
  {
    title: "Training and consultancy",
    content: "training for technicians and engineers, advice on the optimum set-up and use of welding machines",
    icon: address,
    date: [ " Monday - Friday", " -> ", "8:00 - 18:00 " ],
    points: [
      "a",
      "b",
      "c",
    ],
  },
];

const skillBall = [
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
  {
    name: "Programming",
    icon: phoneBall,
  },
];

const contactTutorial = [
  {
    title: 'Step 1',
    img: '',
    info: 'Contact us on our social medias (Instagram, Facebook, Discord), ' + 
    'send us an email or call us on our phone number. ',
    additionalInfo: 'If you have any questions, comments or need help, contacting us is easy.'

  },
  {
    title: 'Step 2',
    img: '',
    info: 'That\'s it. Our team will get back to you as soon as possible ' +
    'and is ready to answer your questions and help you with anything we can. ',
    additionalInfo: 'We look forward to helping you and answering your questions.'
  },
];

const experiences = [
  {
    title: "Address",
    content: "Križovatka, 969 01 Banská Štiavnica",
    icon: address,
    date: [ " Monday - Friday", " -> ", "8:00 - 18:00 " ],
    points: [
      "You can visit us in person at our address, " +
      "where we will warmly welcome you and provide you with all the necessary assistance",
      "Our working hours are Monday to Friday from 8:00 to 18:00, " +
      "In the off-hours you can leave us a message and we will get back to you as soon as possible"
    ],
  },
  {
    title: "Phone",
    content: "+421 915 213 000",
    icon: phone,
    date: [ " Monday - Sunday", " -> ", "8:00 - 20:00 " ],
    points: [
      "If you have any questions or need immediate assistance, feel free to call, " +
      "text or WhatsApp us. We look forward to hearing from you",
      "You can contact us via our phone number anytime " +
      "from Monday to Sunday from 8:00 to 20:00"
    ],
  },
  {
    title: "E-mail",
    content: "jakub.project@spsjm.eu",
    icon: email,
    date: [ " anytime", "  ", "24/7 " ],
    points: [
      "If you have any questions, comments or need further information, " +
      "please do not hesitate to write to us at our email address",
      "Our team is ready to answer your questions and provide you with " +
      "the support you need. We look forward to communicating with you via email"
    ],
  },
];

const contactBall = [
  {
    name: 'Phone',
    icon: phoneBall,

  },
  {
    name: 'Facebook',
    icon: facebook,

  },
  {
    name: 'Instagram',
    icon: instagram,

  },
  {
    name: 'Discord',
    icon: discord,

  },
  {
    name: 'Email',
    icon: emailBall,

  },
];

const projects = [
  {
    name: "",
    description: "",

    tags: [
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
    ],
    //image: ,
    source_code_link: "",
  },
];

export { 
  account, 
  SectionsByPage, 
  socialMedias,
  Feedbacks,
  Components, 
  Contact, 
  services, 
  skillBall, 
  contactTutorial, 
  experiences, 
  contactBall, 
  projects,
};
