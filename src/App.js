import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Skills from "./components/skill/skills";
import Works from "./components/works/works";
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
