import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
