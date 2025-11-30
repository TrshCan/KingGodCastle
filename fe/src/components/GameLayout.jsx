import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import GameSidebar from './GameSidebar';
import { 
  User, 
  Settings, 
  LogOut, 
  Coins,
  Menu
} from 'lucide-react';

const GameLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      toast.warning('Please login to play');
      navigate('/login');
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.info('You have been logged out');
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      {/* Sidebar */}
      <GameSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area - Full width since sidebar is overlay */}
      <div className="w-full">
        {/* Top Bar */}
        <div className="fixed top-0 right-0 left-0 z-20 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="h-20 px-6 flex items-center justify-between gap-4">
            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 bg-black/40 rounded-lg hover:bg-black/60 transition cursor-pointer"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>

            {/* Right side items */}
            <div className="flex items-center gap-4">
            {/* Currency display */}
            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full">
              <Coins className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">1,250</span>
            </div>

            {/* User profile */}
            <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full">
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
              <span className="text-white font-medium">{user.username}</span>
            </div>

            {/* Settings */}
            <button className="p-2 bg-black/40 rounded-full hover:bg-black/60 transition cursor-pointer">
              <Settings className="w-5 h-5 text-white" />
            </button>

            {/* Logout */}
            <button 
              onClick={handleLogout}
              className="p-2 bg-black/40 rounded-full hover:bg-red-500/50 transition cursor-pointer"
            >
              <LogOut className="w-5 h-5 text-white" />
            </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="pt-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
