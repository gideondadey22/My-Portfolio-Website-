import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import "./App.css";
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Journey from './components/Journey/Journey';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="central">
        <div className="bg-animation">
          <BackgroundAnimation />
        </div>
        <div className="central-text">
          <h3>HELLO I'M</h3>
          <h1>GIDEON DADEY</h1>
          <p>Software Developer</p>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <Journey />
      <Footer />
    </div>
  );
}
 