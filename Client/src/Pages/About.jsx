import React from 'react';
import { Leaf, Target, Cog, Award, TrendingUp, Globe, Heart, ChevronRight, AlertTriangle, Sparkles, ShieldCheck, BarChart3, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const aboutData = [
    {
        title: "What is FootPrism?",
        description: "FootPrism is a cutting-edge platform empowering you to track, analyze, and offset your carbon footprint. We turn complex data into actionable insights for a sustainable lifestyle.",
        icon: <Globe className="w-8 h-8" />,
        color: "emerald"
    },
    {
        title: "The Challenge",
        description: "Climate change is the defining crisis of our time. Most people want to help but lack the clarity to understand how their daily choices impact the planet's future.",
        icon: <AlertTriangle className="w-8 h-8" />,
        color: "red"
    },
    {
        title: "Our Solution",
        description: [
            "Precise tracking across transport, energy, and diet",
            "Intuitive data visualization dashboards",
            "Gamified milestones and community impact"
        ],
        icon: <Sparkles className="w-8 h-8" />,
        color: "blue"
    }
];

const features = [
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Smart Analytics",
        description: "Deep dive into your consumption patterns with AI-driven insights."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Verified Impact",
        description: "Your reductions are measured against international green standards."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Global Network",
        description: "Join a worldwide community of sustainability pioneers."
    }
];

const Card = ({ title, description, icon, color }) => {
    const colorClasses = {
        emerald: "bg-emerald-50 text-emerald-600 shadow-emerald-100",
        red: "bg-red-50 text-red-600 shadow-red-100",
        blue: "bg-blue-50 text-blue-600 shadow-blue-100"
    };

    return (
        <div className="group bg-white rounded-[32px] p-10 shadow-2xl shadow-gray-100 border border-gray-50 hover:border-green-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className={`inline-flex p-4 rounded-2xl mb-8 transition-transform group-hover:scale-110 duration-500 ${colorClasses[color]}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-5 tracking-tight">{title}</h3>
            {Array.isArray(description) ? (
                <ul className="space-y-4 text-gray-500 font-medium">
                    {description.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
            )}
            <div className="mt-8 flex items-center text-sm font-bold text-gray-400 group-hover:text-green-600 transition-colors cursor-pointer">
                LEARN MORE <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
};

function About() {
    const navigate = useNavigate();
    const loginNavigate = () => {
        setTimeout(() => {
            navigate('/login')
        }, 500);
    }
    return (
        <div id='about' className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
            
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full lg:w-1/3 lg:h-1/3 bg-emerald-50/30 blur-[80px] md:blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-full h-full lg:w-1/3 lg:h-1/3 bg-blue-50/30 blur-[80px] md:blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 space-y-6">
                    <div className="inline-block py-2 px-4 rounded-full bg-emerald-50/50 backdrop-blur-md text-emerald-700 text-xs md:sm font-black tracking-widest uppercase mb-4 shadow-sm border border-emerald-100/50">
                        The Platform
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] md:leading-tight">
                        Redefining how we <br />
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent italic">value our planet.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-bold leading-relaxed px-4 sm:px-0">
                        FootPrism isn't just a calculator. It's a comprehensive ecosystem designed to make sustainability second nature.
                    </p>
                </div>

                {/* Main Content Cards - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-32">
                    {aboutData.map((about, index) => (
                        <Card
                            key={index}
                            title={about.title}
                            description={about.description}
                            icon={about.icon}
                            color={about.color}
                        />
                    ))}
                </div>

                {/* Performance Stats Overlay Section - Highly Responsive */}
                <div className="relative rounded-[32px] md:rounded-[48px] bg-gray-900 p-8 md:p-16 lg:p-20 overflow-hidden shadow-3xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8 md:space-y-10">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight text-center lg:text-left">
                                Why the world chooses <br />
                                <span className="text-emerald-400">FootPrism.</span>
                            </h3>
                            <div className="space-y-6 md:space-y-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start group text-center sm:text-left">
                                        <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 border border-white/10 shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-white mb-2">{feature.title}</h4>
                                            <p className="text-gray-400 font-bold text-sm md:text-base leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] md:rounded-[40px] p-8 md:p-10 lg:p-12 border border-white/10 text-center space-y-8 md:space-y-10 shadow-2xl">
                            <div className="relative inline-block">
                                <Heart className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 mx-auto animate-pulse" />
                                <div className="absolute -inset-4 bg-emerald-500/20 blur-xl rounded-full animate-pulse"></div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white">Join the Green Revolution</h3>
                            <p className="text-base md:text-lg text-gray-300 font-bold leading-relaxed px-4">
                                Start your journey towards a carbon-neutral lifestyle. Every action counts, and we're here to guide you.
                            </p>
                            <button
                                onClick={loginNavigate}
                                className="w-full bg-emerald-500 cursor-pointer text-white px-8 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 active:scale-95 shadow-xl">
                                Create Your Free Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;