import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Hero></Hero>
      <div className="links">
        <Resume></Resume>
        <Portfolio></Portfolio>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
