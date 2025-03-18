import { FaLinkedin } from "react-icons/fa";

export default function footer() {
    
    return (
        <footer>
          <div>
            <span>Credits: <a href="https://es.vecteezy.com">https://es.vecteezy.com</a></span>
          </div>
          <span>&copy; 2025 Santiago Montoya</span>
          <div>
            <a href="https://www.linkedin.com/in/santiago-montoya-gomez-51912a79"
              target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="#0A66C2" /> {/* ✅ Usa el icono correctamente */}
            </a>
          </div>
        </footer>
      );
    }

  

