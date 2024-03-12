import React from 'react';
// import { FaCaretRight } from "react-icons/fa6";
// import { FaCaretLeft } from "react-icons/fa6";
import SearchIcon from '@mui/icons-material/Search';
import { MdClose, MdOutlineDashboardCustomize, MdNotificationsNone } from "react-icons/md";
import { LuFileBarChart2 } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BsToggle2On } from "react-icons/bs";
// import { MdClose, MdOutlineSettings, MdOutlineDashboardCustomize, MdOutlineCategory, MdOutlineInventory2 } from "react-icons/md";
// import { TbAlignBoxBottomCenter } from "react-icons/tb";
// import { FaUsers } from "react-icons/fa";
// import { IoFileTrayFullOutline, IoLogoDesignernews } from "react-icons/io5";
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

            {/* //Toggle-menu */}

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
                            {/* <BsToggle2On className='icons open-icon' onClick={toggleTheme}/> */}
                               <span>Toggle</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            
            {/* <div className='side-div'>
            <ul className='sidebar_list'>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><MdOutlineDashboardCustomize className='icon'/><span>dashboard</span></a>
                </li>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><IoFileTrayFullOutline className='icon'/><span>product</span></a>
                </li>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><MdOutlineCategory className='icon'/><span>categor</span></a>
                </li>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><FaUsers className='icon'/><span>customers</span></a>
                </li>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><MdOutlineInventory2 className='icon'/><span>inventory</span></a>
                </li>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><TbAlignBoxBottomCenter className='icon'/><span>reports</span></a>
                </li>
                <li className='sidebar_list_item'>
                    <a href='#' target='_blank'><MdOutlineSettings className='icon'/><span>settings</span></a>
                </li>
            </ul> 
            </div>    */}           
            </aside>
        </>
    );
}
export default Sidebar;