import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Work from './components/work/Work'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';



function App() {
  return (
    <div >
      <Router>
        <header>
          <Nav/>
          <Header/>
        </header>
        <Home/>
        <About/>
        <Work />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
