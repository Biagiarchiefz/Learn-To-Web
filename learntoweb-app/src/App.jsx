import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return <div className="bg-white text-dark overflow-x-hidden">
    <Navbar />
    <Hero/>
  </div>;
}

export default App;
