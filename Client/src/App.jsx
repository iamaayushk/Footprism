import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './Pages/Home';
import Dashboard from './Pages/Dasboard2';
import Protected from './components/Protected';
import CarbonCalculator from './components/CarbonCalculator';
import Calculator from './Pages/Calculator';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/calculator" element={<Calculator/>}/>

        
      </Routes>
    </Router>
  )
}

export default App
