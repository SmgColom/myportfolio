import React, { useState } from "react";
import GlobalStyle from "../../style/GlobalStyle";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import BGVideo2 from "../../assets/BGVideo2.mp4";
import { useTheme } from "../../context/ThemeContext"; // ✅ import

// ✅ Styled Components necesarios
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  padding-top: ${({ $isExpanded }) => ($isExpanded ? '24rem' : '6rem')};
  transition: padding-top 0.3s ease-in-out;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding-top: ${({ $isExpanded }) => ($isExpanded ? '22rem' : '6rem')};
  }

  @media (max-width: 768px) {
    padding-top: ${({ $isExpanded }) => ($isExpanded ? '16rem' : '5.5rem')};
  }

  @media (max-width: 430px) {
    padding-top: ${({ $isExpanded }) => ($isExpanded ? '16rem' : '5rem')};
  }
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
`;

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { mode } = useTheme(); // ✅ theme context
  const isLightMode = mode === "light"; // ✅ define modo claro

  return (
    <PageWrapper>
      <GlobalStyle isHome={isHome} />

      {isHome && (
        <VideoBackground autoPlay muted loop playsInline           
        title="Background video"
        role="presentation"
        aria-hidden="true">
          <source src={BGVideo2} type="video/mp4" />
        </VideoBackground>
      )}

      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <AppContent $isExpanded={isExpanded}>
        <Outlet />
      </AppContent>

      <Footer isLightMode={isLightMode} /> {/* ✅ pasamos prop */}
    </PageWrapper>
  );
};

export default Layout;











