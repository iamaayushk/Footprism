import React from 'react';
import { Globe, Target, Zap, Car, Utensils, ShoppingBag, Trash2, Leaf, ArrowRight, CheckCircle } from 'lucide-react';

// Mission Component
function Mission() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <Target className="w-12 h-12 text-emerald-600" />
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold text-gray-800 mb-6">
                        Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mission</span>
                    </h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    {/* Animated Earth */}
                    <div className="relative">
                        <div className="w-70 h-70 rounded-full bg-gradient-to-br from-blue-400 via-green-400 to-blue-500 animate-spin-slow shadow-2xl flex items-center justify-center">
                            <Globe className="w-64 h-64 text-white/80" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                            <Leaf className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
                            <Zap className="w-6 h-6 text-yellow-500" />
                        </div>
                    </div>

                    {/* Mission Text */}
                    <div className="max-w-2xl">
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Empowering Change, One Step at a Time</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Our mission is to empower individuals to take control of their carbon footprint and make a positive impact on the environment. We believe that small daily actions can lead to significant change when combined with community support and awareness.
                            </p>
                            {/* <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                                    <div className="text-2xl font-bold text-emerald-600">1M+</div>
                                    <div className="text-sm text-gray-600">CO₂ Reduced</div>
                                </div>
                                <div className="text-center p-4 bg-teal-50 rounded-xl">
                                    <div className="text-2xl font-bold text-teal-600">10K+</div>
                                    <div className="text-sm text-gray-600">Active Users</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
}

// CarbonStep Component
const steps = [
    {
        heading: 'Transport',
        icon: <Car className="w-6 h-6" />,
        color: 'blue',
        steps: [
            'Walk or cycle for short distances',
            'Use public transport or carpool',
            'Shift to electric vehicles if possible'
        ]
    },
    {
        heading: 'Electricity & Energy',
        icon: <Zap className="w-6 h-6" />,
        color: 'yellow',
        steps: [
            'Use LED lights and energy-efficient appliances',
            'Turn off switches when not in use',
            'Shift to solar energy or renewable sources'
        ]
    },
    {
        heading: 'Food & Diet',
        icon: <Utensils className="w-6 h-6" />,
        color: 'green',
        steps: [
            'Prefer vegetarian or plant-based meals',
            'Buy local and seasonal produce',
            'Avoid food waste plan meals and store properly'
        ]
    },
    {
        heading: 'Consumption & Shopping',
        icon: <ShoppingBag className="w-6 h-6" />,
        color: 'purple',
        steps: [
            'Buy only what you need reduce impulse buying',
            'Choose sustainable fashion (organic cotton, thrift)',
            'Avoid over-packaged products'
        ]
    },
    {
        heading: 'Waste Management',
        icon: <Trash2 className="w-6 h-6" />,
        color: 'red',
        steps: [
            'Recycle and compost whenever possible',
            'Reuse containers, bottles, and bags',
            'Reduce single-use plastics'
        ]
    }
];

const CarbonStep = () => {
    const colorClasses = {
        blue: "bg-blue-50 border-blue-200 text-blue-600",
        yellow: "bg-yellow-50 border-yellow-200 text-yellow-600",
        green: "bg-green-50 border-green-200 text-green-600",
        purple: "bg-purple-50 border-purple-200 text-purple-600",
        red: "bg-red-50 border-red-200 text-red-600"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <Leaf className="w-12 h-12 text-emerald-600" />
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold text-gray-800 mb-8">
                        What is a <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Carbon Step</span>?
                    </h1>
                </div>

                {/* Definition Section */}
                <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 mb-16">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            Carbon Step refers to the impact of a single action or habit on your carbon footprint. While "carbon footprint" is the total CO₂ you emit over time, a carbon step is like one "footprint" at a time — it measures how each decision contributes to climate change.
                        </p>
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                            <p className="text-lg text-gray-700">
                                <span className="font-semibold text-emerald-600">Example:</span> Using a plastic bag or taking a flight represents individual carbon steps that add up to your overall environmental impact.
                            </p>
                        </div>
                    </div>
                </div>

                {/* How to Improve Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Improve Your Carbon Step</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Small changes in these key areas can make a significant difference in your environmental impact
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center mb-6">
                                <div className={`p-3 rounded-xl mr-4 ${colorClasses[item.color]}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">{item.heading}</h3>
                            </div>
                            <ul className="space-y-4">
                                {item.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Call to Action
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
                        <h2 className="text-4xl font-bold mb-4">Ready to Take Your First Carbon Step?</h2>
                        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                            Start measuring your impact today and join thousands of others making a difference, one step at a time.
                        </p>
                        <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center space-x-2">
                            <span>Calculate Your Footprint</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div> */}
            </div>
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