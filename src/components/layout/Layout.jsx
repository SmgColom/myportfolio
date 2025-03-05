import Background from "./Background";

import Header from "./Header"
import Footer from "./Footer"

import { Outlet } from "react-router-dom"

function Layout() {
  return (
<Background>
   <Header />   
   <div className="appContent">
      <Outlet />
   </div>
   <Footer />
</Background>

  )
}

export default Layout;