import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Home from "../../pages/Home";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Header toggle={toggleSidebar} />
      <main>
        <Home />
        <Services />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
