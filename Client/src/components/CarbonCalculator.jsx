import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Leaf, Zap, Car, ShoppingBag, Trash2, Calculator, Award, AlertTriangle, CheckCircle } from 'lucide-react';
import axios from 'axios';
const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    travel: '',
    electricity: '',
    shopping: '',
    diet: 'veg',
    trash: ''
  });

  const [carbonOutput, setCarbonOutput] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasLoggedToday, setHasLoggedToday] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const checkLogStatus = async () => {
      try {
        const res = await axios.get('https://footprism-1.onrender.com/user/check-today-log', {
          withCredentials: true
        });
        setHasLoggedToday(res.data.hasLogged);
        setHasLoggedToday(false);
      } catch (err) {
        console.error("Failed to check today's log:", err);
      }
    };

    checkLogStatus();
  }, []);

  const EMISSION_FACTORS = useMemo(() => ({
    travel: 0.15,
    electricity: 0.6,
    shopping: 0.002,
    waste: 1.2,
    diet: {
      veg: 1.5,
      mixed: 2.5,
      nonveg: 3.8
    }
  }), []);

  const validateInputs = useCallback((data) => {
    const newErrors = {};
    if (!data.travel || data.travel < 0) newErrors.travel = 'Enter valid travel (km/day)';
    if (!data.electricity || data.electricity < 0) newErrors.electricity = 'Enter valid electricity use';
    if (!data.shopping || data.shopping < 0) newErrors.shopping = 'Enter valid shopping amount';
    if (!data.trash || data.trash < 0) newErrors.trash = 'Enter valid trash bags';
    return newErrors;
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }, [errors]);

  const getFeedbackMessage = useCallback((carbon) => {
  const value = parseFloat(carbon);
  if (value <= 5) {
    return {
      message: "🌱 Outstanding! Your daily carbon use is climate-friendly.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-200",
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      recommendations: [
        "Maintain this eco-friendly lifestyle!",
        "You're helping limit global warming."
      ]
    };
  } else if (value <= 10) {
    return {
      message: "👍 Good! You're below the global average. Aim for < 5kg/day.",
      color: "text-green-700",
      bgColor: "bg-green-50 border-green-200",
      icon: <Award className="w-5 h-5 text-green-700" />,
      recommendations: [
        "Use public transport or bike more.",
        "Reduce energy or water heating usage."
      ]
    };
  } else if (value <= 20) {
    return {
      message: "⚠️ Moderate. There's room for improvement.",
      color: "text-amber-700",
      bgColor: "bg-amber-50 border-amber-200",
      icon: <AlertTriangle className="w-5 h-5 text-amber-700" />,
      recommendations: [
        "Switch to LED bulbs & energy-efficient appliances.",
        "Try more plant-based meals.",
        "Avoid fast fashion or excessive shopping."
      ]
    };
  } else {
    return {
      message: "🔥 High daily footprint. Make greener choices.",
      color: "text-red-700",
      bgColor: "bg-red-50 border-red-200",
      icon: <AlertTriangle className="w-5 h-5 text-red-700" />,
      recommendations: [
        "Avoid flights & reduce car use.",
        "Eat less meat or dairy.",
        "Track & cut down electricity/waste usage."
      ]
    };
  }
}, []);


  const calculateCarbon = useCallback(async () => {
    setIsCalculating(true);

    const validationErrors = validateInputs(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsCalculating(false);
      return;
    }

    try {
      const travelEmission = parseFloat(formData.travel) * EMISSION_FACTORS.travel;
      const electricityEmission = parseFloat(formData.electricity) * EMISSION_FACTORS.electricity;
      const shoppingEmission = parseFloat(formData.shopping) * EMISSION_FACTORS.shopping;
      const wasteEmission = parseFloat(formData.trash) * EMISSION_FACTORS.waste;
      const foodEmission = EMISSION_FACTORS.diet[formData.diet];

      const total = travelEmission + electricityEmission + shoppingEmission + wasteEmission + foodEmission;

      const response = await axios.post('https://footprism-1.onrender.com/user/calculator', {
        ...formData,
        carbonFootprint: total
      }, { withCredentials: true });

      setCarbonOutput({
        total: total.toFixed(2),
        breakdown: {
          travel: travelEmission.toFixed(2),
          electricity: electricityEmission.toFixed(2),
          shopping: shoppingEmission.toFixed(2),
          waste: wasteEmission.toFixed(2),
          food: foodEmission.toFixed(2)
        }
      });

      setFeedback(getFeedbackMessage(total));
      setHasLoggedToday(true);
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        setErrors({ general: error.response.data.message });
        setHasLoggedToday(true);
      } else {
        setErrors({ general: 'Something went wrong. Please try again.' });
      }
    }

    setIsCalculating(false);
  }, [formData, EMISSION_FACTORS, validateInputs, getFeedbackMessage]);

  const inputFields = [
    { name: 'travel', placeholder: 'Travel (km/day)', icon: Car, type: 'number' },
    { name: 'electricity', placeholder: 'Electricity (kWh/day)', icon: Zap, type: 'number' },
    { name: 'shopping', placeholder: 'Shopping (₹/day)', icon: ShoppingBag, type: 'number' },
    { name: 'trash', placeholder: 'Trash Bags/kg', icon: Trash2, type: 'number' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Carbon Footprint Calculator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your monthly carbon emissions and discover ways to reduce your environmental impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-6">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{errors.general}</p>
                </div>
              )}

             
              {inputFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className="space-y-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        disabled={hasLoggedToday}
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${hasLoggedToday ? 'bg-gray-50 text-gray-500' : 'border-gray-200'
                          } ${errors[field.name] ? 'border-red-300' : ''}`}
                      />
                    </div>
                    {errors[field.name] && (
                      <p className="text-red-600 text-sm">{errors[field.name]}</p>
                    )}
                  </div>
                );
              })}

              
              <div className="space-y-2 ">
                <label className="block text-sm font-medium text-gray-700">Diet Type</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Leaf className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="diet"
                    value={formData.diet}
                    onChange={handleChange}
                    disabled={hasLoggedToday}
                    className={`w-full pl-10 cursor-pointer pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${hasLoggedToday ? 'bg-gray-50 text-gray-500' : 'border-gray-200'
                      }`}
                  >
                    <option className='bg-emerald-200 text-gray-800' value="veg">Vegetarian</option>
                    <option className='bg-emerald-200 text-gray-800' value="mixed">Mixed</option>
                    <option className='bg-emerald-200 text-gray-800' value="nonveg">Non-Vegetarian</option>
                  </select>
                </div>
              </div>

              
              <button
                type="button"
                onClick={calculateCarbon}
                disabled={isCalculating || hasLoggedToday}
                className={`w-full py-4 cursor-pointer px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${hasLoggedToday
                    ? 'bg-gray-400 cursor-not-allowed'
                    : isCalculating
                      ? 'bg-emerald-400 cursor-wait'
                      : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
              >
                <Calculator className="w-5 h-5" />
                <span>
                  {hasLoggedToday
                    ? 'Already Logged Today'
                    : isCalculating
                      ? 'Calculating...'
                      : 'Calculate Carbon Footprint'
                  }
                </span>
              </button>
            </div>
          </div>

          
          <div className="space-y-6">
            {carbonOutput && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Carbon Footprint</h3>

                {/* Total Emissions */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white text-center mb-6">
                  <div className="text-3xl font-bold">{carbonOutput.total} kg</div>
                  <div className="text-emerald-100">CO₂ per day</div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700 mb-3">Breakdown by Category</h4>
                  {[
                    { key: 'travel', label: 'Travel', icon: Car, color: 'bg-blue-100 text-blue-700' },
                    { key: 'electricity', label: 'Electricity', icon: Zap, color: 'bg-yellow-100 text-yellow-700' },
                    { key: 'shopping', label: 'Shopping', icon: ShoppingBag, color: 'bg-purple-100 text-purple-700' },
                    { key: 'food', label: 'Food', icon: Leaf, color: 'bg-green-100 text-green-700' },
                    { key: 'waste', label: 'Waste', icon: Trash2, color: 'bg-red-100 text-red-700' }
                  ].map(({ key, label, icon: Icon, color }) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-700">{label}</span>
                      </div>
                      <span className="font-semibold text-gray-800">{carbonOutput.breakdown[key]} kg</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feedback && (
              <div className={`rounded-2xl shadow-xl p-8 border-2 ${feedback.bgColor}`}>
                <div className="flex items-center space-x-3 mb-4">
                  {feedback.icon}
                  <h3 className={`text-xl font-bold ${feedback.color}`}>Assessment</h3>
                </div>

                <p className={`text-lg mb-6 ${feedback.color}`}>
                  {feedback.message}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {feedback.recommendations.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Info Card */}
            {!carbonOutput && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Track Your Carbon Footprint?</h3>
                <div className="space-y-4 text-gray-600">
                  <p>Understanding your carbon footprint is the first step toward making more sustainable choices.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">12.8 tons</div>
                      <div className="text-sm">Global Average</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2 tons</div>
                      <div className="text-sm">Paris Agreement Goal</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;