import About from "./About/About";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Servicess from "./Servicess/Servicess";
import Skills from "./Skills/Skills";
import Slideshow from "./Slideshow/Slideshow";
import Team from "./Team/Team";

function App() {
  return (
   <>

     <Navbar />
     <About />
     <Servicess />
     <Skills />
     <Projects />
     <Team />
     <Slideshow />
     <Form />
     <Footer />
    
   </>
  );
}

export default App;
