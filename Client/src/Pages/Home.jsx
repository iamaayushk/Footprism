import React from 'react'
import Navbar from '../components/Navbar'
import Lottie from "lottie-react";
import RainEffect from '../components/RainEffect';
import About from './About';
import Mission from './Mission';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Leaf, ArrowRight, Calculator, Activity, Globe, Zap, Sparkles } from 'lucide-react';
import heroVisual from '../assets/hero-visual.png';

function Home() {
  const navigate = useNavigate();
  
  const loginNavigate = () => {
    setTimeout(() => {
      navigate('/login')
    }, 500);
  }

  const signupNavigate = () => {
    setTimeout(() => {
      navigate('/signup')
    }, 500);
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id='home' className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
        
        {/* Advanced Mesh Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-1/4 w-full h-full bg-emerald-100/50 blur-[100px] md:blur-[140px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 -right-1/4 w-full h-full bg-blue-100/30 blur-[100px] md:blur-[140px] rounded-full animate-pulse-slow delay-700"></div>
        </div>

        {/* Floating Decorative Elements - Hidden on mobile for cleaner UI */}
        <div className="absolute top-40 left-10 opacity-20 animate-float hidden lg:block">
          <Leaf className="w-12 h-12 text-emerald-600 rotate-12" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-20 animate-float delay-1000 hidden lg:block">
          <Zap className="w-10 h-10 text-green-600 -rotate-12" />
        </div>

        <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left">
            
            {/* Ultra-Premium Glass Badge */}
            <div className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-xl rounded-2xl px-4 md:px-5 py-2.5 shadow-xl border border-white/40 hover:border-white/60 transition-all cursor-default group mx-auto lg:ml-0">
              <div className="p-1 bg-green-500 rounded-lg text-white shadow-lg shadow-green-200">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-gray-800 font-black text-xs md:text-sm tracking-widest uppercase">Sustainability Reimagined</span>
            </div>

            {/* Main Heading with Multi-Layered Style */}
            <div className="space-y-4">
              <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-gray-900 tracking-tight px-2 sm:px-0">
                Track your <span className="relative inline-block">
                  carbon.
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-green-400/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="8" fill="transparent" />
                  </svg>
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent italic tracking-tighter">
                  Change the world.
                </span>
              </h1>
            </div>

            {/* Premium Subtitle */}
            <p className="text-gray-500 text-lg md:text-2xl max-w-2xl leading-relaxed font-bold px-4 lg:px-0">
              Join the movement of conscious individuals using data-driven insights to minimize their environmental impact.
            </p>

            {/* CTA Container */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start pt-6 px-4">
              <button  
                onClick={signupNavigate}
                className="group relative bg-gray-900 text-white font-black py-4 md:py-5 px-8 md:px-10 rounded-[24px] shadow-2xl hover:bg-emerald-600 transition-all duration-500 overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="flex items-center gap-3 justify-center relative z-10 text-base md:text-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </button>
              
              <button 
                onClick={loginNavigate}
                className="group flex items-center justify-center gap-3 bg-white/40 backdrop-blur-xl border border-white/60 text-gray-900 font-black py-4 md:py-5 px-8 md:px-10 rounded-[24px] shadow-xl hover:bg-white hover:border-emerald-400 transition-all duration-500 active:scale-95"
              >
                <Calculator className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 group-hover:scale-110 transition-all" />
                <span className="text-base md:text-lg">Open Calculator</span>
              </button>
            </div>

            {/* Trust Badges / Avatars - Cleaned up version */}
            <div className="pt-8 border-t border-gray-100/30 mt-12 hidden lg:block opacity-0"></div>
          </div>
          
          {/* Right Visual Column - Optimized for Mobile */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 px-4 sm:px-6">
            <div className="relative w-full max-w-2xl mx-auto group">
              
              {/* Glass Background Behind Visual */}
              <div className="absolute -inset-4 sm:-inset-10 bg-white/10 backdrop-blur-2xl rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-1000"></div>
              
              {/* Main Visual - Glass Frame */}
              <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/20 transform group-hover:scale-[1.02] transition-all duration-700 bg-white/5">
                <img 
                  src={heroVisual} 
                  alt="Environmental Sustainability" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Floating Glass Cards - Hidden on smaller screens for clarity, simplified for tablet */}
              <div className="absolute -top-6 -right-2 md:-top-10 md:-right-10 bg-white/40 backdrop-blur-2xl p-4 md:p-6 rounded-[24px] md:rounded-3xl shadow-2xl border border-white/60 animate-float max-w-[140px] md:max-w-[180px] hidden sm:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100/50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-black text-gray-900 text-xs md:text-sm">Impact</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-loading"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 bg-white/40 backdrop-blur-2xl p-4 md:p-6 rounded-[24px] md:rounded-3xl shadow-2xl border border-white/60 animate-float delay-1000 max-w-[180px] md:max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100/50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Activity className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-tighter">Real-time</div>
                    <div className="text-base md:text-lg font-black text-gray-900">98% Data</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
          }
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 80%; }
          }
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.05); opacity: 0.5; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 10s ease-in-out infinite;
          }
          .animate-loading {
            animation: loading 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
        `}</style>
      </section>

      {/* Transitional Separator */}
      <div className="h-24 bg-gradient-to-b from-white to-emerald-50/30"></div>

      <div className="relative pb-24">
        <About />
        <div className="h-32 bg-transparent"></div>
        <Mission />
      </div>
      
      <Footer />
    </div>
  )
}

export default Home