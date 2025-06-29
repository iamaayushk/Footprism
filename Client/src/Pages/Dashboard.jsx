import React, { useEffect, useState } from 'react';
import { LineChart } from '../components/LineChart';
import DashNav from '../components/DashNav';
import { BarChart } from '../components/Barchart';
import DoughnutChart from '../components/DoughnutChart';
import GoalChart from '../components/GoalChart';
import { useLocation, useNavigate } from 'react-router-dom';
import animation from '../assets/calcianimation.gif';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { icon: <i className="ri-home-line text-xl font-bold"></i>, route: '/' },
    { icon: <img src={animation} alt="" />, route: '/calculator' },
    { icon: <i className="ri-dashboard-fill text-xl"></i>, route: '/dashboard' },
    { icon: <i className="ri-contacts-line text-xl"></i>, route: '/contact' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = buttons.findIndex(btn => btn.route === location.pathname);
    if (index !== -1) setActiveIndex(index);
  }, [location.pathname]);

  const handleClick = (index, route) => {
    setActiveIndex(index);
    navigate(route);
  };

  const homeNav = () => {
    const index = buttons.findIndex(btn => btn.route === '/home');
    setActiveIndex(index);
    navigate('/home');
  };

  return (
    <div className='min-h-screen main-div overflow-hidden bg-[#1a1a1b]'>
      <div className='navbar p-5'>
        <DashNav />
      </div>

      <div className='main-box flex flex-row ml-5 gap-10'>
        {/* Sidebar */}
        <div className='flex flex-col bg-transparent min-h-screen gap-10 p-5 justify-between h-screen w-40 items-center'>
          <div className='flex flex-col gap-22'>
            {buttons.map((btn, index) => (
              <div
                key={index}
                onClick={() => handleClick(index, btn.route)}
                className={`h-15 w-15 flex justify-center items-center rounded-full cursor-pointer transition-all duration-300
                ${activeIndex === index ? 'bg-[#3498DB] text-white shadow-lg scale-110' : 'bg-[#7F8C8D] text-black'}`}
              >
                {btn.icon}
              </div>
            ))}
            <div
              onClick={homeNav}
              className={`h-15 w-15 flex justify-center items-center rounded-full cursor-pointer transition-all duration-300
              ${location.pathname === '/home' ? 'bg-[#3498DB] text-white shadow-lg scale-110' : 'bg-[#7F8C8D] text-black'}`}
            >
              <i className="ri-logout-box-line text-xl"></i>
            </div>
          </div>
        </div>

        <div className='w-full min-h-screen p-5'>
          {/* Header */}
          <div className='right-main-box w-full bg-[#262a2a] shadow-md rounded-2xl h-30 flex'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-3xl text-[#D6D6D6] font-semibold m-8'>
                Your Sustainability Dashboard
              </p>
              <div className='h-25 w-80 flex justify-between m-6 bg-[#7F8C8D] rounded-2xl p-4'>
                <p className='text-center font-medium text-[18px]'>Monitor & Improve Your Eco Impact</p>
                <div className='h-15 w-38 flex justify-between items-center text-[#D6D6D6] bg-[#5a5d5d] rounded-2xl p-4 font-semibold'>
                  <p className='text-center text-xl'>Your Progress</p>
                  <i className="ri-arrow-down-line"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className='flex flex-wrap gap-5'>
            <div className='w-180 h-90 shadow-lg mt-5 bg-[#262a2a] text-[#D6D6D6] rounded-2xl flex flex-col justify-center items-center'>
              <BarChart />
            </div>

            <div className='w-100 h-90 shadow-lg mt-5 bg-[#262a2a] rounded-2xl'>
              <DoughnutChart />
            </div>

            <div className='w-150 h-90 shadow-lg mt-5 bg-[#262a2a] rounded-2xl'>
              <LineChart />
            </div>

            <div className='w-120 h-80 flex items-center justify-center shadow-lg mt-5  bg-[#1a1a1b] ml-25'>
              <GoalChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
