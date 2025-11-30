import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import AdminSidebar from './AdminSidebar';
import { Menu, LogOut, User, Bell } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem('user') || '{}'));
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.info('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="h-full px-4 flex items-center justify-between">
          {/* Left: Menu Button & Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition cursor-pointer"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          </div>

          {/* Right: User Info & Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-white/10 rounded-lg transition cursor-pointer relative">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 bg-slate-800/50 px-3 py-2 rounded-lg">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.username}
                  className="w-8 h-8 rounded-full border-2 border-purple-400"
                />
              ) : (
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
              <span className="text-white font-medium hidden md:block">{user.username || 'Admin'}</span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 hover:bg-red-500/20 rounded-lg transition cursor-pointer"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-white hover:text-red-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="pt-16 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
