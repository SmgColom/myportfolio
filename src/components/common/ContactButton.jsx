import React from "react";

function ContactButton() {

  const ContactMe = "mailto:smontoya1985@gmail.com?subject=Consulta&body=Hello, I want more info.";

  return (
      <button 
        onClick={() => window.open(ContactMe, "_blank")} 
        className="card-button"
      >📧 <strong> Contact Me</strong>
      </button>
  
  );
}

export default ContactButton;
