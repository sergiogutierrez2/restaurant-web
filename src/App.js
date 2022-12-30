import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
        <Route exact path="/restaurant-web/" element={<Home/>}/>
        <Route exact path="/restaurant-web/menu" element={<Menu/>}/> 
        <Route exact path="/restaurant-web/about" element={<About/>} />
        <Route exact path="/restaurant-web/contact" element={<Contact/>} />
       </Routes>
       <Footer/>
      </Router>
    </div>

  );
}

export default App;
