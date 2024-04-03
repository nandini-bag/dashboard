import React from 'react';
import {MdOutlineCategory} from "react-icons/md";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { IoFileTrayFullOutline } from "react-icons/io5";
import Chart from './Chart';

const Home=({showMennu})=>{
    return (
        <>
            <main className={`main_container ${showMennu ? 'collaps' : ''}`}>
                <div className='main_title'>
                   <h3>dashboard</h3>
                </div>
                <div className='main_cards'>
                   <div className='card'>
                        <div className='inner_card'>
                            <h3>Product</h3>
                            <IoFileTrayFullOutline className='icon'/>
                        </div>
                        <h1>300</h1>
                   </div>
                   <div className='card'>
                        <div className='inner_card'>
                            <h3>Category</h3>
                            <MdOutlineCategory className='icon'/>
                        </div>
                        <h1>12</h1>
                   </div>
                   <div className='card'>
                        <div className='inner_card'>
                            <h3>customers</h3>
                            <FaUsers className='icon'/>
                        </div>
                        <h1>33</h1>
                   </div>
                   <div className='card'>
                        <div className='inner_card'>
                            <h3>Reports</h3>
                            <TbAlignBoxBottomCenter className='icon'/>
                        </div>
                        <h1>56</h1>
                   </div>
                </div>
                <div className='charts'>
                    <Chart/>
                </div>
            </main>
        </>
    );
}
export default Home;