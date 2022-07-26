import Launch from "./components/Launch"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contributions from './components/Contributions';
import Veey from './Veey';
import './App.css';
import Volunteer from "./components/Volunteer";
import Community from "./components/Community";
import Contact from "./components/Contact";
import { useGlobalContext } from "./context";


function App() {
  const { themeStyles} = useGlobalContext();
  return (
      <div style={themeStyles}>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="launch"  element={<Launch />} />
          <Route path="/"  element={<Home />} />
          <Route path="contributions"  element={<Contributions />} />
          <Route path="volunteer"  element={<Volunteer/>} />
          <Route path="community"  element={<Community/>} />
          <Route path="contact"  element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      </div>
      
    
  );
}

export default App;
