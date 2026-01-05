import "./App.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Form from "./pages/Form";
import Menu from "./pages/Menu";
import ScrollToTop from "./components/Scrollup";


const App = () => {
  return (
   <>
    <Header/>
    <ScrollToTop />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/menu" element={<Menu/>} />
    </Routes>
   
    <Footer/>
   </>
  )
}

export default App