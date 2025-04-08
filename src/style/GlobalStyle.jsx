import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    background: ${({ isHome }) => (isHome ? "transparent" : "var(--bg-color)")};
    color: var(--text-color);
    font-family: 'Open Sans', sans-serif;
  }
* {
    box-sizing: border-box;
    max-width: 100%; /* Evita que los elementos sobrepasen el ancho */
  }
#root,
  body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
}

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .navbar-nav-wrapper {
  width: 100%;
  overflow-x: hidden;
}

  /* 💡 Navbar colapsada (opcional si lo usas con lógica en Header) */
  .appContent.shifted {
    margin-top: 20px;
    transition: margin-top 0.3s ease-in-out;
  }

  /* 🖥️ Tablets (<= 1024px) */
  @media (max-width: 1024px) {

    .profile-image {
      width: 300px;
      height: 300px;
    }

  }

.homeBtn,
.card-button,
.calendar-button {
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
}

  /* 📱 Móviles (<= 768px) */
  @media (max-width: 768px) {


    .profile-image {
      width: 200px;
      height: 200px;
      float: none;
      display: block;
      margin: 0 auto;
    }

    .custom-navbar {
      flex-direction: column;
      height: auto;
    }

    .custom-navbar .nav-link {
      font-size: 1rem;
      margin: 5px 0;
    }

    .homeBtn {
      width: 120px;
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    .image-container {
      height: 30vh;
    }
  }

  /* 📲 Móviles pequeños (<= 480px) */
  @media (max-width: 480px) {


    .profile-image {
      width: 150px;
      height: 150px;
    }


    .homeBtn {
      width: 100%;
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    .testimonial {
      font-size: small;
      width: 100%;
      min-height: 250px;
    }

    .image-container {
      height: 30vh;
    }
  }


  .image-container {
    height: 35vh;
  }
`;

export default GlobalStyle;


