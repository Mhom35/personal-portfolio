import logo from './logo.svg';
import './App.css';
import { NavBar} from './components/NavBar'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const express = require("express");
  const path = require("path");

  const app = express();

  app.use(express.static(path.join(__dirname, "dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started");
  });

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills /> 
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
