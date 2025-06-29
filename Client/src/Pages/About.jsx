import React from 'react';
import { Leaf, Target, Cog, Users, Award, TrendingUp, Globe, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const aboutData = [
    {
        title: "What is FootPrism?",
        description: "FootPrism is a modern web application that empowers individuals to track, reduce, and take responsibility for their carbon footprint. With powerful visual tools and a supportive community, it encourages small daily steps that collectively create a big environmental impact.",
        icon: <Leaf className="w-8 h-8" />,
        color: "emerald"
    },
    {
        title: "Problem We Solve",
        description: "Climate change is one of the most urgent challenges of our time. While many people want to live more sustainably, they lack the tools and awareness to understand their environmental impact. Most of us don't realize how daily actions like driving to work or consuming fast fashion add up in carbon emissions. FootPrism bridges this gap.",
        icon: <Target className="w-8 h-8" />,
        color: "red"
    },
    {
        title: "How FootPrism Works",
        description: [
            "Track your activities such as transportation, energy use, diet, and shopping",
            "Visualize your carbon emissions on a personal dashboard",
            "Earn badges and track progress over time",

        ],
        icon: <Cog className="w-8 h-8" />,
        color: "blue"
    }
];

const features = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Track Progress",
        description: "Monitor your carbon footprint reduction over time"
    },
    // {
    //     icon: <Users className="w-6 h-6" />,
    //     title: "Community",
    //     description: "Connect with like-minded environmental enthusiasts"
    // },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Achievements",
        description: "Earn badges for reaching sustainability milestones"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Impact",
        description: "See how your actions contribute to global change"
    }
];

const Card = ({ title, description, icon, color }) => {
    const colorClasses = {
        emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
        red: "bg-red-50 border-red-200 text-red-600",
        blue: "bg-blue-50 border-blue-200 text-blue-600"
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-sm">
            <div className={`inline-flex p-3 rounded-xl mb-6 ${colorClasses[color]}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            {Array.isArray(description) ? (
                <ul className="space-y-3 text-gray-600">
                    {description.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 leading-relaxed">{description}</p>
            )}
        </div>
    );
};

function About() {
    const navigate = useNavigate();
    const loginNavigate = () => {
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Hero Section */}
            <div className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-4 rounded-full shadow-lg">
                            <Leaf className="w-12 h-12 text-emerald-600" />
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold text-gray-800 mb-6">
                        About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">FootPrism</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Empowering individuals to make a meaningful impact on climate change through awareness, action, and community.
                    </p>
                </div>
            </div>

            {/* Main Content Cards */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-20">
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

                {/* Features Section */}
                <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose FootPrism?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join thousands of users who are already making a difference in the fight against climate change
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
                        <Heart className="w-12 h-12 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
                        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                            Start your journey towards a more sustainable lifestyle today. Every small action counts when we work together.
                        </p>
                        <button
                            onClick={loginNavigate}
                            className="bg-white cursor-pointer text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </div>
    );
}

export default About;