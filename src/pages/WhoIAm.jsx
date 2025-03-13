import { useState } from "react";
import "../styles/index.css"; 
import AccordionList from "../components/features/accordion/AccordionList";
import { Container } from "react-bootstrap";
import ProfileImage from "../assets/ProfileImage.jpeg";


function WhoIAmPage() {
  const [panels, setPanels] = useState([
    {
      id: 1,  
      title: "Your Partner in Digital Transformation!",
      content:
        "With 15+ years of experience in competitiveness, sustainability, and sales strategies, I help businesses leverage software development and web solutions to drive growth and innovation.<br/><br/>" +
        "As a Productivity & Quality Engineer and Marketing Specialist, I combine cutting-edge technology, intuitive UX/UI design, and strategic innovation to create high-performance digital experiences tailored to your business needs.<br/><br/>" +
        "I deliver solutions that:<br/>" +
        "✅ Enhance customer engagement<br/>" +
        "✅ Improve operational efficiency<br/>" +
        "✅ Increase sales and conversions<br/><br/>" +
        "Let's build a seamless digital experience for your company! Ready to take your business to the next level? Let's connect! 💡"
    },
    {
      id: 2,
      title: "My Educational Background",
      content:
        "I'm currently expanding my tech expertise at Holmesglen Institute, working towards a Diploma in Information Technology.<br/><br/>" +
        "My journey started with an Engineering degree in Productivity and Quality at Politécnico Colombiano JIC, followed by a Postgraduate degree in Marketing at EAFIT University.<br/><br/>" +
        "Recently, I earned a Certificate IV in Information Technology (Web Development), strengthening my skills in modern web technologies.<br/><br/>" +
        "This blend of engineering, marketing, and tech empowers me to create innovative and high-performing digital solutions!"
    },
    {
      id: 3,
      title: "My Passions",
      content:
        "I'm all about energy, creativity, and constant growth! ⚡<br/><br/>" +
        "Whether I'm playing or watching sports, I'm always up for the thrill of competition. 🏀⚽🎾<br/><br/>" +
        "Web development is my playground, where I love building cool and functional digital experiences. 💻🎨<br/><br/>" +
        "Music is my fuel, especially when it's blasting rock & roll—nothing beats the power of a killer riff! 🎸🔥<br/><br/>" +
        "I'm also passionate about mastering English and expanding my knowledge every day. 🚀 Always curious, always learning!"
    }
  ]);

  return (
      <Container className="box">
        <h1>Who I Am</h1>
        <img className="profile-image" src={ProfileImage} alt="Profile" />
          <AccordionList panels={panels} />
      </Container>
  );
}

export default WhoIAmPage;

