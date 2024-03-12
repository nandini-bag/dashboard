import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MdClose, MdOutlineDashboardCustomize, MdNotificationsNone } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuFileBarChart2 } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BsToggle2On } from "react-icons/bs";
import { IoLogoDesignernews } from "react-icons/io5";
const Sidebar=({showMennu, toggleMenu})=>{    
    return (
        <>
            <aside id='sidebar' className={showMennu ? 'hide-show' : ''}>
            <div className='sidebar-logo'>
                <IoLogoDesignernews className='logo-icon'/>
                <span className='logo-name'>Dashboard</span>
                <MdClose className='close-icon' onClick={toggleMenu}/>
            </div>
            <div className='sidebar-content'>
                <div className='search-box'>
                    <ul>
                        <li>
                            <a href='#'>
                                <SearchIcon fontSize='large' className='search-icon'/>
                                <input type='text' placeholder='Search...' className='input-box' maxLength='12'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='menu-list'>
                    <ul>
                        <li>
                            <a href='#'>
                                <MdOutlineDashboardCustomize className='icons'/>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <MdOutlineCategory className='icons'/>
                                <span>Category</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <HiMiniUserGroup className='icons'/>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <LuFileBarChart2 className='icons'/>
                                <span>Revenue</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <MdNotificationsNone className='icons'/>
                                <span>Notification</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <TbFileAnalytics className='icons'/>
                                <span>Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FiHeart className='icons'/>
                                <span>likes</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='bottom-content'>
                    <ul>
                        <li>
                            <a href='#'>
                               <BiLogOut className='icons'/>
                               <span>Login</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='bottom-icons'>
                               <BsToggle2On className='icons open-icon'/>
                               <span>Toggle</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>          
            </aside>
        </>
    );
}
export default Sidebar;