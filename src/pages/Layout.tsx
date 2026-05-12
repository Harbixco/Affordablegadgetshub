import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import ScrollToSection from "./ScrollToSection";
import Footer from "./Footer/Footer"

function Layout() {
  return (
    <>
      <ScrollToSection />
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;


