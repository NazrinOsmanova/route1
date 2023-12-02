import './App.css';
import Btn from './Components/Btn';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import Index from './Components/Index';
import NoPage from './Components/NoPage';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // console.log(document.querySelector("nav"));
    document.querySelector("nav").style.transition = "2s";
  }, []);

  return (
    <div className="App">
      <Btn />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Index</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
