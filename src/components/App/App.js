import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Home from "../../pages/Home";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useState } from "react";
import Advantages from "../Advantages/Advantages";
import { StyledMain } from "./App.styled";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Header toggle={toggleSidebar} />
      <StyledMain>
        <Home />
        <Advantages />
        <Services />
      </StyledMain>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
