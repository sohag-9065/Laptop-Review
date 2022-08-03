import React, { useEffect, useState } from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, BarChart, Tooltip, Legend, Bar, Label, AreaChart, Area, PieChart, Pie } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('dashboardChart.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, [])
    return (
        <div className='dashboard-container'>
            <h1 className='dashboard-heading'> Four Types Chart</h1>
            <div className="charts-container">
                <div className="chart">
                    <h1 className='chart-heading'>Line Chart: <span>Sell</span></h1>
                    <LineChart width={500} height={300} data={chartData} margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="122 2" /> */}
                        <Tooltip />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis ></YAxis>
                        <Legend />
                    </LineChart>
                </div>
                <div className="chart">
                    <h1>Bar Chart: <span>Investment VS Revenue</span></h1>
                    <BarChart width={500} height={300} data={chartData} margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="chart">
                    <h1>Area Chart: <span>Investment VS Revenue</span></h1>
                    <AreaChart width={500} height={300} data={chartData} margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="a" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stackId="a" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div className="chart">
                    <h1>Pie Chart: <span>Investment VS Revenue</span></h1>
                    <PieChart width={500} height={300} margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}>
                        <Tooltip />
                        <Legend />
                        <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;