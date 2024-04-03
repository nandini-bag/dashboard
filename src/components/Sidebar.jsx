import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MdOutlineDashboardCustomize, MdNotificationsNone, MdOutlineCategory } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuFileBarChart2 } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BsToggle2On } from "react-icons/bs";
import {NavLink} from 'react-router-dom';

const Sidebar=({showMennu})=>{    
    return (
        <>
            <aside id='sidebar' className={showMennu ? 'hide-show' : ''}>
            <div className='sidebar-content'>
                <div className='search-box'>
                    <ul>
                        <li>
                            <NavLink>
                            <SearchIcon fontSize='large' className='search-icon'/>
                            <input type='text' placeholder='Search...' className='input-box' maxLength='12'/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='menu-list'>
                    <ul>
                        <li>
                            <NavLink to='/dashboard'>
                            <MdOutlineDashboardCustomize className='icons'/>
                            <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <MdOutlineCategory className='icons'/>
                            <span>Category</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <HiMiniUserGroup className='icons'/>
                            <span>Customers</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <LuFileBarChart2 className='icons'/>
                            <span>Revenue</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <MdNotificationsNone className='icons'/>
                            <span>Notification</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <TbFileAnalytics className='icons'/>
                            <span>Analytics</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <FiHeart className='icons'/>
                            <span>likes</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='bottom-content'>
                    <ul>
                        <li>
                            <NavLink to='/dashboard'>
                            <BiLogOut className='icons'/>
                            <span>login</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                            <BsToggle2On className='icons'/>
                            <span>Toggle</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>          
            </aside>
        </>
    );
}
export default Sidebar;