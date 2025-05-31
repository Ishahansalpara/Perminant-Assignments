import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}
export default App;