import React from 'react'
import Navbar from '../components/Navbar'
// import ecoAnimation from '../assets/eco_animation.json'
import Lottie from "lottie-react";
import RainEffect from '../components/RainEffect';
import About from './About';
import Mission from './Mission';
import CarbonStep from '../components/CarbonStep';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Leaf, ArrowRight, Calculator, Play } from 'lucide-react';
function Home() {
  const navigate = useNavigate();
  const loginNavigate=()=>{
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }
  const signupNavigate=()=>{
    setTimeout(() => {
      navigate('/signup')
    }, 1000);
  }
  return (
    <>
      <Navbar />
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-green-200">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-medium text-sm">Start Your Green Journey</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            Track Your Carbon.
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Change the World.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-xl lg:text-2xl max-w-xl leading-relaxed">
            Begin your sustainability journey today. Monitor your carbon footprint, 
            get personalized tips, and make a real impact on our planet.
          </p>

          {/* Feature Points */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Easy Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Smart Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Real Impact</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button  
              onClick={signupNavigate}
              className="group cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
            onClick={loginNavigate}
            className="group bg-white/80 backdrop-blur-sm cursor-pointer text-gray-700 border-2 border-green-200 font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:border-green-400">
              <span className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-green-600" />
                Use Calculator
              </span>
            </button>
          </div>
        </div>
        
        {/* Right Content - Simple Visual */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-full max-w-lg mx-auto">
            
            {/* Main Earth-like Circle */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
              {/* Outer ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-500 rounded-full shadow-2xl opacity-20 animate-pulse"></div>
              
              {/* Middle ring */}
              <div className="absolute inset-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-xl opacity-40"></div>
              
              {/* Inner circle */}
              <div className="absolute inset-16 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Leaf className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                  <div className="text-xl font-bold">Your Journey</div>
                  <div className="text-sm opacity-90">Starts Here</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 -left-4 bg-white rounded-xl p-3 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  🌱
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Daily Tips</div>
                  <div className="text-xs text-gray-500">Personalized</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 -right-4 bg-white rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  📊
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Track Progress</div>
                  <div className="text-xs text-gray-500">Real-time</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  🌍
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Make Impact</div>
                  <div className="text-xs text-gray-500">Together</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
    <About/>
    <Mission/>
    <Footer/>
    </>

  )
}

export default Home