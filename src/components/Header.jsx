import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from "react-icons/bs";
const Header=({toggleMenu})=>{
    return (
        <>
            <div className='header'>
               <div className='menu_icon'>
                  <GiHamburgerMenu  className='icon toggle-icon' onClick={toggleMenu}/>                  
               </div>
               <div className='header_right'>
               <BsFillBellFill  className='icon'/>
               <BsFillEnvelopeFill  className='icon'/>
               <BsPersonCircle  className='icon'/>
               </div>
            </div>
        </>
    );
}
export default Header;