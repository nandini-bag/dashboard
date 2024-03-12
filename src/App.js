import React,{ useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

const App=()=>{
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu=()=>{
      setShowMenu(!showMenu);
  }
  return (
    <>
        <div className="container">
        <Header toggleMenu={ToggleMenu}/>
        <Sidebar showMennu={showMenu} toggleMenu={ToggleMenu}/>
        <Home/>
        </div>        
    </>
  );
}
export default App;