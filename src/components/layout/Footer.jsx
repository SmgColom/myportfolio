import Inlogo from "../../assets/Inlogo.png";

export default function footer() {
    
    return (
        <footer>
            <div>
            <span>Credits: https://es.vecteezy.com</span>    
            </div>
            <div>
            <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
            </div>
            <span>&copy; 2025 Santiago Montoya</span>
            <div>
            <a 
            href="https://www.linkedin.com/in/santiago-montoya-gomez-51912a79"
            target="_blank"
            rel="noopener noreferrer">
            <img 
            src={Inlogo} 
            alt="Logo" 
            style={{ height: "50px", paddingLeft: "10px", cursor: "pointer", paddingTop: "10px" }} />
            </a>
            </div>
        </footer>
    );
  }

  

