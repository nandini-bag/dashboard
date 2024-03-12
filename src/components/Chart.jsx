import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Chart=()=>{
    const data = [
    {
        name:'product1',category:'category-A',price:299219,
    },
    {
        name:'product2',category:'category-B',price:395439,
    },
    {
        name:'product3',category:'category-C',price:49990,
    },
    {
        name:'product4',category:'category-D',price:511999,
    },
    {
        name:'product5',category:'category-E',price:600029,
    },
    ];
    return(
        <>
        <div className='main_charts'>
            
            <div className='barChart'>
            <h1>bar chart</h1>
            {/* <div style={{ width: '100%', height: 300 }}> */}
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="price" stroke="#63013d" fill="#63013d" />
          </AreaChart>
        </ResponsiveContainer>
            </div>
            
            
            <div className='simpleBarChart'>
            <h1>simplebar chart</h1>
            {/* <div style={{ width: '100%', height: 300 }}> */}
            <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10}} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="price" fill="#63013d" background={{ fill: '#eee' }} />
          {/* <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} /> */}
        </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
        </>
    );
}
export default Chart;