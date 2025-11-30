import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import { socialLinks, buyMeCoffeeUrl, gameVersion } from '../config/socialLinks';
import { 
  Play, 
  Settings, 
  Coffee, 
  LogOut, 
  User
} from 'lucide-react';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.info('You have been logged out');
  };

  const handlePlay = () => {
    if (!user) {
      toast.warning('Please login to play');
      navigate('/login');
      return;
    }
    toast.info('Starting game...');
    // Navigate to game page when ready
  };

  const handleSettings = () => {
    toast.info('Settings coming soon...');
  };

  const handleBuyMeCoffee = () => {
    window.open(buyMeCoffeeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* User info in top right */}
      {user && (
        <div className="absolute top-6 right-6 flex items-center gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
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
          <button
            onClick={handleLogout}
            className="ml-2 p-2 hover:bg-white/10 rounded-full transition cursor-pointer"
            title="Logout"
          >
            <LogOut className="w-4 h-4 text-white" />
          </button>
        </div>
      )}

      {/* Main menu container */}
      <div className="relative z-10 text-center">
        {/* Game title */}
        <div className="mb-16 animate-float">
          <h1 className="text-7xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
            KING GOD
            <span className="block text-6xl bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              CASTLE
            </span>
          </h1>
          <p className="text-purple-300 text-lg tracking-widest animate-pulse">EPIC ADVENTURE AWAITS</p>
        </div>

        {/* Menu buttons */}
        <div className="space-y-6 mb-16">
          <button
            onClick={handlePlay}
            className="group p-20 relative w-80 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-xl tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <Play className="w-6 h-6 group-hover:animate-pulse" />
              <span>PLAY</span>
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>

          <button
            onClick={handleSettings}
            className="group w-80 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-xl tracking-wide transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/30 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
              <span>SETTINGS</span>
            </div>
          </button>

          <button
            onClick={handleBuyMeCoffee}
            className="group w-80 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-xl tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <Coffee className="w-6 h-6 group-hover:animate-bounce" />
              <span>BUY ME A COFFEE</span>
            </div>
          </button>

          {!user && (
            <button
              onClick={() => navigate('/login')}
              className="w-80 bg-slate-800/30 hover:bg-slate-700/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold text-lg tracking-wide transition-all duration-300 border border-white/10 hover:border-purple-400/50 cursor-pointer"
            >
              LOGIN / REGISTER
            </button>
          )}
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-4">
          {socialLinks.filter(social => social.enabled).map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              title={social.label}
            >
              <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        {/* Version info */}
        <div className="mt-8 text-white/30 text-sm">
          Version {gameVersion}
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-purple-500/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-500/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/30"></div>
    </div>
  );
};

export default Home;
