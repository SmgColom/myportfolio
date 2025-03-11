import React from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <Background>
      <Header />
      <div className="appContent">
        <Outlet />
      </div>
      <Footer />
    </Background>
  );
}

export default Layout;

