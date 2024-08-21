import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Hero page={"Home"}></Hero>
    </>
  );
};

export default Home;
