import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:3000/user/login', formData, {
                withCredentials: true,
            });
            console.log('Login successful', formData);
            setSuccess('Login successful! Redirecting...');
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (err) {
            console.error('Login error', err);
            setError(err?.response?.data?.msg || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const navigateToSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-emerald-600 rounded-full shadow-lg">
                            <Leaf className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        Welcome Back
                    </h1>
                </div>

                <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 p-8 lg:p-12">
                            <div className="max-w-md mx-auto">
                                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                                    Sign in to your account
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 outline-none"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 outline-none"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Signing in...</span>
                                            </div>
                                        ) : (
                                            'Sign In'
                                        )}
                                    </button>

                                    {success && (
                                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-green-700 text-sm font-medium">{success}</p>
                                        </div>
                                    )}
                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-red-700 text-sm font-medium">{error}</p>
                                        </div>
                                    )}

                                    <div className="text-center pt-4">
                                        <p className="text-gray-600">
                                            Don't have an account?{' '}
                                            <button
                                                type="button"
                                                onClick={navigateToSignup}
                                                className="text-emerald-600 cursor-pointer font-semibold hover:text-emerald-700 transition-colors hover:underline"
                                            >
                                                Sign up here
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
                            <div className="h-64 lg:h-full bg-gradient-to-br from-emerald-200 via-teal-200 to-green-300 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <Leaf className="w-16 h-16 text-emerald-700" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                                        Grow Green Together
                                    </h3>
                                    <p className="text-emerald-700 text-lg">
                                        Join thousands making a difference
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>© 2025 FootPrism. Made with ❤️ by Aayush</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
