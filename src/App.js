import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbars from "./components/Navbars";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbars />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
