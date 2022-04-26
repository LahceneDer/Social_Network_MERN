import './App.css';
import { Home } from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { Register } from './pages/register/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={user ?  <Home /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={user ? <Home /> : <Register />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
