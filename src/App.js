import { useEffect } from 'react';
import './App.css';
import HoverFunction from "./components/navbar/HoverFunction";
import Main from './components/main/Main';
import Scrolling from "./components/main/functions/Scrolling";
import NavbarSwitch from './components/main/functions/NavbarSwitch';

function App() {
  useEffect(()=>{
    HoverFunction()
    Scrolling()
  })
  return (
    <>
      <NavbarSwitch/>
      <Main/>
    </>
  );
}

export default App;
