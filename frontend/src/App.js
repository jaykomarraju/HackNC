import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checking from './pages/Checking';
import Savings from './pages/Savings';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import CreateProfile from './pages/CreateProfile';
import CreateProfile2 from './pages/CreateProfile2';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/createaddr" element={<CreateProfile2 />} />
        <Route path="/checking" element={<Checking />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
