import React, { useEffect } from 'react';
import { Home, BarChart3, LogOut, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CalciNav() {
    const navigate = useNavigate();
    // Simulated navigation functions - replace with actual useNavigate hooks
    const handleHome = () => {
        console.log('Navigate to home');
        navigate('/');
    };

    const handleDash = () => {
        console.log('Navigate to dashboard');
        navigate('/dashboard');
    };
    useEffect(() => {
        axios.get('https://footprism-1.onrender.com/user/me', { withCredentials: true })
            .then(res => {
                // Token is valid, do nothing or set user state
            })
            .catch(err => {
                console.log('Token invalid or expired');
                navigate('/login'); // or '/'
            });
    }, []);

    const handleLogout = () => {
        // Clear auth cookie by hitting logout endpoint (backend should clear the cookie)
        axios.post('https://footprism-1.onrender.com/user/logout', {}, { withCredentials: true })
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.error('Logout failed:', err);
                navigate('/');
            });
    };

    return (
        <nav className="w-full h-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
                        <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        FootPrism
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handleHome}
                        className="group relative cursor-pointer p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        title="Home"
                    >
                        <Home className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {/* Home */}
                        </span>
                    </button>

                    <button
                        onClick={handleDash}
                        className="group relative cursor-pointer p-3 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        title="Dashboard"
                    >
                        <BarChart3 className="w-5 h-5 text-teal-600 group-hover:text-teal-700" />
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {/* Dashboard */}
                        </span>
                    </button>

                    <button
                        onClick={handleLogout}
                        className="group relative cursor-pointer p-3 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5 text-red-600 group-hover:text-red-700" />
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {/* Logout */}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default CalciNav;