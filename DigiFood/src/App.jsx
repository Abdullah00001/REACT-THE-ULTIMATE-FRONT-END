import "./App.css";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/serviceSection/Services";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
    </>
  );
}

export default App;
