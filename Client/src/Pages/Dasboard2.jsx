import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Home,
  Calculator,
  BarChart3,
  MessageCircle,
  LogOut,
  Search,
  Bell,
  User,
  TrendingUp,
  Leaf,
  Target,
  Zap,
  Droplets,
  Recycle,
  Wind,
  ChevronDown,
  Award,
  Activity,
  Route,
  Hash,
  IndianRupee
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#8b5cf6', '#f472b6'];

const ChartCard = ({ title, children }) => (
  <div className="p-6 rounded-2xl shadow-md bg-gray-900">
    <h4 className="font-semibold text-lg text-gray-300 mb-4">{title}</h4>
    <div className="h-64">{children}</div>
  </div>
);

const DashNav = () => (
  <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-4 px-6 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <Leaf className="text-emerald-600 w-7 h-7" />
      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
        FootPrism
      </span>
    </div>
    <div className="flex items-center gap-3">
      <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 cursor-pointer ">
        <Search className="text-gray-600 w-5 h-5" />
      </button>
      <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 cursor-pointer  relative">
        <Bell className="text-gray-600 w-5 h-5" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <button className="bg-gradient-to-r from-emerald-500 to-teal-500  cursor-pointer p-2 rounded-full">
        <User className="text-white w-5 h-5" />
      </button>
    </div>
  </header>
);

function Dashboard() {
  // const MONTHLY_CARBON_GOAL = 200;
  const [activeIndex, setActiveIndex] = useState(2);
  const [carbonData, setCarbonData] = useState([]);
  const [monthlyGoalPercent, setMonthlyGoalPercent] = useState(0);
  const [monthlyReductionPercent, setMonthlyReductionPercent] = useState(0);
  const [averagePerDay, setAveragePerDay] = useState(0);
  const [pieData, setPieData] = useState([]);
  const navigate = useNavigate();
  const MONTHLY_CARBON_GOAL = 200;

  useEffect(() => {
    const fetchCarbonData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/user/carbon-data', { withCredentials: true });
        const data = res.data;
        setCarbonData(data);

        const now = new Date();
        const thisMonth = now.getMonth();
        const thisYear = now.getFullYear();

        const thisMonthEntries = data.filter(entry => {
          const date = new Date(entry.Date);
          return date.getMonth() === thisMonth && date.getFullYear() === thisYear;
        });

        const totalThisMonth = thisMonthEntries.reduce((acc, cur) => acc + cur.carbonFootprint, 0);
        const daysLogged = thisMonthEntries.length;

        const avgPerDay = daysLogged > 0 ? totalThisMonth / daysLogged : 0;
        setAveragePerDay(avgPerDay);

        const goalPerDay = MONTHLY_CARBON_GOAL / 30;
        const budgetPercent = goalPerDay > 0
          ? Math.max(0, Math.min(100, ((goalPerDay - avgPerDay) / goalPerDay) * 100))
          : 0;
        setMonthlyGoalPercent(budgetPercent);

        // Pie chart data update
        setPieData([
          { name: 'Monthly Goal', value: parseFloat(MONTHLY_CARBON_GOAL.toFixed(2)) },
          { name: 'Your Average', value: parseFloat(avgPerDay.toFixed(2)) }
        ]);

      } catch (err) {
        console.error('Failed to fetch carbon data', err);
      }
    };

    fetchCarbonData();
  }, []);



  const navItems = [
    { icon: Home, label: 'Home', route: '/' },
    { icon: Calculator, label: 'Calculator', route: '/calculator' },
    { icon: BarChart3, label: 'Dashboard', route: '/dashboard' },
    { icon: MessageCircle, label: 'Contact', route: '/contact' },
  ];

  const handleClick = (index, route) => {
    setActiveIndex(index);

    if (route === '/') {
      // Hit logout endpoint if going to Home
      axios.post('http://localhost:3000/user/logout', {}, { withCredentials: true })
        .then(() => {
          navigate('/');
        })
        .catch(err => {
          console.error('Logout failed:', err);
          navigate('/');
        });
    } else {
      navigate(route);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:3000/user/me', { withCredentials: true })
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
    axios.post('http://localhost:3000/user/logout', {}, { withCredentials: true })
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.error('Logout failed:', err);
        navigate('/');
      });
  };

  const stats = [
    { icon: Zap, value: carbonData.reduce((acc, cur) => acc + cur.electricity, 0), unit: 'kWh', label: 'Electricity used', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { icon: Route, value: carbonData.reduce((acc, cur) => acc + cur.travel, 0), unit: 'km', label: 'Total Distance Travelled ', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: IndianRupee, value: carbonData.reduce((acc, cur) => acc + cur.shopping, 0), unit: '₹ ', label: 'Spent on Shopping', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: Hash, value: carbonData.reduce((acc, cur) => acc + cur.trash, 0), unit: 'no', label: 'Trash Bag used', color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const lineData = carbonData.map(entry => ({
    name: new Date(entry.Date).toLocaleDateString(),
    value: entry.carbonFootprint
  }));



  const barData = [
    { name: 'Electricity', value: carbonData.reduce((acc, cur) => acc + cur.electricity, 0) },
    { name: 'Travel', value: carbonData.reduce((acc, cur) => acc + cur.travel, 0) },
    { name: 'Shopping', value: carbonData.reduce((acc, cur) => acc + cur.shopping, 0) },
    { name: 'Trash', value: carbonData.reduce((acc, cur) => acc + cur.trash, 0) },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      <DashNav />

      <main className="flex">
        <aside className="w-20 p-4 flex flex-col items-center border-r m-2 rounded-xl border-gray-200 bg-gray-900 shadow-sm min-h-screen">
          <div className="flex-1 space-y-20  ">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleClick(i, item.route)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all ${activeIndex === i
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white scale-110 shadow-md'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <item.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 w-12 h-12 cursor-pointer rounded-xl bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </aside>

        <section className="flex-1 p-6 bg-gray-100">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600">Monitor your sustainability metrics and progress for this month</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-4 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-300">{s.value} <span className="text-sm text-gray-300">{s.unit}</span></div>
                  <div className="text-gray-300 text-sm mt-1">{s.label}</div>
                </div>
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${s.bg}`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2  ">
              <ChartCard title="Category Breakdown">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
            <ChartCard title="Monthly Goal vs Your Average">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <ChartCard title="Carbon Footprint Timeline">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
            <ChartCard title="Sustainability Goals">
              <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                <Target className="text-orange-600 w-12 h-12" />
                <div>
                  <h3 className="text-lg text-gray-300 font-semibold">
                    Monthly Goal: {MONTHLY_CARBON_GOAL} Kg/CO<sub>2</sub>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Daily Budget: {(MONTHLY_CARBON_GOAL / 30).toFixed(2)} Kg/CO<sub>2</sub>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-300 font-semibold">
                    Avg Daily Emission: {averagePerDay.toFixed(2)} Kg/CO<sub>2</sub>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {averagePerDay <= (MONTHLY_CARBON_GOAL / 30)
                      ? "You're on track! Keep it up."
                      : "You need to reduce daily carbon usage to meet your goal."}
                  </p>
                </div>

              </div>
            </ChartCard>

          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
