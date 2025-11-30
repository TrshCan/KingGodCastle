import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import MainHall from './pages/MainHall';
import Quest from './pages/Quest';
import Barracks from './pages/Barracks';
import Summon from './pages/Summon';
import SummonDetail from './pages/SummonDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageHeroes from './pages/admin/ManageHeroes';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/mainhall" element={<MainHall />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="/heroes" element={<Barracks />} />
      <Route path="/summon" element={<Summon />} />
      <Route path="/summon/:type" element={<SummonDetail />} />
      <Route path="/inventory" element={<MainHall />} />
      <Route path="/worldmap" element={<MainHall />} />
      <Route path="/guild" element={<MainHall />} />
      <Route path="/arena" element={<MainHall />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/heroes" element={<ManageHeroes />} />
      <Route path="/admin/analytics" element={<AdminDashboard />} />
      <Route path="/admin/reports" element={<AdminDashboard />} />
      <Route path="/admin/settings" element={<AdminDashboard />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
