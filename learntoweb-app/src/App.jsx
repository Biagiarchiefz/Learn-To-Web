import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Bannerbot from "./components/Banner/Bannerbot";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="bg-white text-dark overflow-x-hidden">
    <Hero/>
    <Services/>
    <Banner/>
    <Subscribe/>
    <Bannerbot/>
    <Footer/>
  </div>
  )
}

export default App;
