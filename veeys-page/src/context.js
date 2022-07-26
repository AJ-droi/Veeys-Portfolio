import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import img from './Images/background.png';
import darkImg from './Images/dark.png';
import "./App.css"
import data from "./data";

const AppContext = React.createContext();
const AppUpdatedContext = React.createContext();

const AppProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [content, setContent] = useState(false);
    const [boxValue, setBoxValue] = useState(data)

    const themeStyles = {
      backgroundColor: darkTheme ? `#010F0A` : `transparent`,
      backgroundImage: darkTheme ? `url(${darkImg})` : `url(${img})`,
      color: darkTheme ? `#fff` : `#000`,
    }

    const width = {
      width: "110%"
    }

    const borderStyles = {
      borderBottom: darkTheme ? `1px solid #fff` : `1px solid #000`,
    }

    const border = {
      border: darkTheme ? `1px solid #fff` : `1px solid #000`
    }


    const toggleTheme = (e) => {
        e.preventDefault()
        setDarkTheme(!darkTheme);
    }

    const toggleContent = (e) => {
      e.preventDefault();
      setContent(!content);
  }

    const slider = (e) => {
      console.log(e.target.classList.toggle("hide"))
    }

    const toggleNav = () => {
      console.log("hello");
      setShowMenu(!showMenu)
    }
   
  return (
    <AppContext.Provider value={{darkTheme, themeStyles, borderStyles, border, showMenu,  width, boxValue, content}}>
        <AppUpdatedContext.Provider value={{toggleTheme, toggleNav, slider, setShowMenu, toggleContent}}>
            {children}
        </AppUpdatedContext.Provider> 
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };

export const useUpdatedContext =() => {
    return useContext(AppUpdatedContext);
};
  
export { AppContext, AppProvider };