import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Home from './pages/game/Home';
import LoadingScreen from './pages/common/LoadingScreen';
import MainHall from './pages/game/MainHall';
import Quest from './pages/game/Quest';
import Barracks from './pages/game/Barracks';
import Summon from './pages/game/Summon';
import SummonDetail from './pages/game/SummonDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageHeroes from './pages/admin/ManageHeroes';
import ManageInventories from './pages/admin/ManageInventories';
import ManageQuests from './pages/admin/ManageQuests';
import ManageUserHeroes from './pages/admin/ManageUserHeroes';
import ManageFriends from './pages/admin/ManageFriends';
import ManageRegions from './pages/admin/ManageRegions';
import ManageItems from './pages/admin/ManageItems';
import ManageItemEffects from './pages/admin/ManageItemEffects';

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
      <Route path="/admin/inventories" element={<ManageInventories />} />
      <Route path="/admin/quests" element={<ManageQuests />} />
      <Route path="/admin/user-heroes" element={<ManageUserHeroes />} />
      <Route path="/admin/friends" element={<ManageFriends />} />
      <Route path="/admin/regions" element={<ManageRegions />} />
      <Route path="/admin/items" element={<ManageItems />} />
      <Route path="/admin/item-effects" element={<ManageItemEffects />} />
      <Route path="/admin/analytics" element={<AdminDashboard />} />
      <Route path="/admin/reports" element={<AdminDashboard />} />
      <Route path="/admin/settings" element={<AdminDashboard />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
