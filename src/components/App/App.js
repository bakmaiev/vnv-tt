import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useState } from "react";
import Advantages from "../Advantages/Advantages";
import { StyledMain } from "./App.styled";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Brief from "../Brief/Brief";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Header toggle={toggleSidebar} />
      <StyledMain>
        <Hero />
        <Advantages />
        <Services />
        <Projects />
        {/* <Contacts /> */}
        <Brief />
        <Faq />
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
