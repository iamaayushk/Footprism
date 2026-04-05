import React from 'react';
import { Globe, Target, Zap, Car, Utensils, ShoppingBag, Trash2, Leaf, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

// Mission Component
function Mission() {
    return (
        <div id='mission' className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-full lg:w-1/2 h-1/2 bg-blue-50/40 blur-[100px] md:blur-[140px] rounded-full translate-y-[-50%]"></div>
            <div className="absolute bottom-0 right-0 w-full lg:w-1/3 h-1/3 bg-emerald-50/40 blur-[100px] md:blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24 space-y-4 px-4">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-50/50 backdrop-blur-md text-blue-700 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase border border-blue-100/50 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Our Commitment
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] md:leading-tight">
                        A mission for <br />
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent italic tracking-tighter">generations to come.</span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    
                    {/* Animated Earth Visual - Optimized for Mobile */}
                    <div className="relative group px-4 sm:px-0">
                        <div className="absolute -inset-4 sm:-inset-10 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-1000"></div>
                        <div className="relative aspect-square max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto rounded-full bg-gradient-to-br from-blue-500/80 via-emerald-400/80 to-cyan-500/80 animate-spin-slow shadow-[0_0_60px_rgba(59,130,246,0.2)] flex items-center justify-center p-1 backdrop-blur-3xl">
                            <div className="w-full h-full rounded-full bg-[#0a192f] flex items-center justify-center overflow-hidden relative border border-white/10 shadow-inner">
                                <Globe className="w-[75%] h-[75%] text-white/10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                                
                                {/* Orbiting Dots */}
                                <div className="absolute inset-6 border border-white/5 rounded-full animate-spin-slow-reverse">
                                    <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Labels - Responsive Positioning */}
                        <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-white/40 backdrop-blur-2xl p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] shadow-2xl border border-white/60 animate-bounce-slow">
                            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
                        </div>
                        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white/40 backdrop-blur-2xl p-4 sm:p-5 rounded-[20px] sm:rounded-[24px] shadow-2xl border border-white/60 animate-bounce-slow delay-700">
                            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                        </div>
                    </div>

                    {/* Mission Text */}
                    <div className="space-y-10 md:space-y-12 px-4 sm:px-6">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                Empowering Change, <br />
                                <span className="text-blue-600">One Step</span> at a Time.
                            </h3>
                            <p className="text-lg md:text-xl text-gray-500 font-bold leading-relaxed">
                                Our goal is to democratize carbon tracking. We provide the tools, data, and community needed to turn environmental anxiety into positive action. 
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[32px] bg-white/40 backdrop-blur-xl shadow-2xl shadow-gray-100/50 border border-white/60 group hover:border-blue-200 transition-all text-center sm:text-left">
                                <div className="text-4xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform">95%</div>
                                <div className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Impact Rate</div>
                            </div>
                            <div className="p-8 rounded-[32px] bg-white/40 backdrop-blur-xl shadow-2xl shadow-gray-100/50 border border-white/60 group hover:border-emerald-200 transition-all text-center sm:text-left">
                                <div className="text-4xl font-black text-emerald-600 mb-2 group-hover:scale-110 transition-transform">12k+</div>
                                <div className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Trees Planted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-spin-slow { animation: spin-slow 30s linear infinite; }
                .animate-spin-slow-reverse { animation: spin-slow-reverse 20s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
            `}</style>
        </div>
    );
}

// CarbonStep Component
const steps = [
    {
        heading: 'Smart Transport',
        icon: <Car className="w-6 h-6" />,
        color: 'blue',
        steps: [
            'Prioritize active mobility',
            'Transit optimization',
            'EV technology adoption'
        ]
    },
    {
        heading: 'Energy Efficiency',
        icon: <Zap className="w-6 h-6" />,
        color: 'yellow',
        steps: [
            'Energy monitoring',
            'Renewable adoption',
            'Efficient heating/cooling'
        ]
    },
    {
        heading: 'Conscious Diet',
        icon: <Utensils className="w-6 h-6" />,
        color: 'green',
        steps: [
            'Plant-forward planning',
            'Zero waste strategy',
            'Seasonal sourcing'
        ]
    }
];

const CarbonStep = () => {
    const colorClasses = {
        blue: "bg-blue-100/50 text-blue-600",
        yellow: "bg-yellow-100/50 text-yellow-600",
        green: "bg-emerald-100/50 text-emerald-600"
    };

    return (
        <div id='carbon' className="relative py-24 md:py-32 px-4 sm:px-6 bg-gray-50/30">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
                    <div className="space-y-4 max-w-2xl text-center lg:text-left px-4 sm:px-0 mx-auto lg:mx-0">
                        <div className="text-emerald-600 font-black text-xs md:text-sm uppercase tracking-[0.2em]">Action Guide</div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">The Carbon Step.</h2>
                        <p className="text-lg md:text-xl text-gray-500 font-bold leading-relaxed px-4 lg:px-0">
                            It's the granular measurement of your daily decisions. Every step counts toward your total footprint.
                        </p>
                    </div>
                </div>

                {/* Steps Grid - Responsive columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {steps.map((item, index) => (
                        <div key={index} className="bg-white/40 backdrop-blur-xl rounded-[40px] p-10 md:p-12 shadow-2xl shadow-gray-200/40 border border-white/60 hover:border-emerald-200 transition-all duration-500 group">
                            <div className="flex items-center gap-6 mb-10">
                                <div className={`p-4 md:p-5 rounded-2xl transition-transform group-hover:rotate-6 duration-500 shadow-lg ${colorClasses[item.color]}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900">{item.heading}</h3>
                            </div>
                            <ul className="space-y-6">
                                {item.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="flex items-center gap-4 text-gray-500 font-bold text-sm md:text-base group/item">
                                        <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors border border-emerald-100 shadow-sm">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Definitional Overlay - Responsive layout */}
                <div className="mt-20 md:mt-32 p-1 rounded-[32px] md:rounded-[48px] bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 animate-gradient-x shadow-2xl">
                    <div className="bg-white/90 backdrop-blur-md rounded-[31px] md:rounded-[47px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 text-center lg:text-left">
                        <div className="max-w-2xl px-2">
                            <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Start Taking Steps.</h3>
                            <p className="text-base md:text-lg text-gray-500 font-bold leading-relaxed px-4 lg:px-0">
                                Ready to see your actual impact? Our calculator uses granular data points to provide the most accurate assessment of your daily carbon steps.
                            </p>
                        </div>
                        <button className="w-full lg:w-auto px-10 py-5 rounded-2xl bg-gray-900 text-white font-black text-lg hover:bg-emerald-600 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all active:scale-95 shadow-2xl">
                            Scale Your Step
                        </button>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 10s ease infinite;
                }
            `}</style>
        </div>
    );
};

// Export both components
function MissionAndCarbonStep() {
    return (
        <div>
            <Mission />
            <CarbonStep />
        </div>
    );
}

export default MissionAndCarbonStep;