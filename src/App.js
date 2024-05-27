import "./App.css";
import Confetti from "./Confetti";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import NoPage from './components/NoPage/NoPage';
import About from './components/About/About';


const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} >
              
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
