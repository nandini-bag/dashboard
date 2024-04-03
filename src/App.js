import React,{ useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

const App=()=>{
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu=()=>{
      setShowMenu(!showMenu);
  }
  return (
    <>
        <BrowserRouter>
        <div className="container">
        <Header toggleMenu={ToggleMenu}/>
        <Sidebar showMennu={showMenu} toggleMenu={ToggleMenu}/>
        <Home showMennu={showMenu}/>
        </div>
        </BrowserRouter>        
    </>
  );
}
export default App;