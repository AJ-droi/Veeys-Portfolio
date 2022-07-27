import Launch from "./components/Launch"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contributions from './components/Contributions';
import './App.css';
import Volunteer from "./components/Volunteer";
import Community from "./components/Community";
import Contact from "./components/Contact";
import { useGlobalContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const { themeStyles} = useGlobalContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 5000)
  },[])
  return (
    <div style={themeStyles}>
      {loading ? <Launch /> : <div style={themeStyles}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home />} />
            {/* <Route path="launch"  element={<Launch />} /> */}
            <Route path="contributions"  element={<Contributions />} />
            <Route path="volunteer"  element={<Volunteer/>} />
            <Route path="community"  element={<Community/>} />
            <Route path="contact"  element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>}
      </div>
      
    
  );
}

export default App;
