import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/dashboard';
import HomePage from './components/HomePage/homepage';
import Myex from './components/Myex/myex';


function App() {
  return (<Router>
      <div className="App">
        < h1>My Simple Navigation List</h1>
        <nav>
          <Link to="/login">Login</Link> |{" "}
    <Link to="/register">Register</Link>
    <Link to="/dashboard">Dashboard</Link> |{" "}
    <Link to="/home">HomePage</Link> |{" "}
    <Link to="/myex">Myex</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
      <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/myex" element={<Myex />} />
        </Routes>
      </div>
    </Router>

  );
      
  }


export default App;

