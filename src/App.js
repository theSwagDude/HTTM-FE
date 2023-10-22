import logo from './logo.svg';
import './App.css';
import Id from './Id';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element= { <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scan" element={<Id />} />
      </Routes>
    </Router>
  );
}

export default App;
