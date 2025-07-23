import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(130,69,236,0.12)_0,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.10)_0,transparent_50%),linear-gradient(120deg,#181c2f_0%,#232946_100%)]">

      {/* Faint geometric dot grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
