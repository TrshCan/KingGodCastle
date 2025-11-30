import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import { ArrowLeft, User } from 'lucide-react';

const MainHall = () => {
  const [user, setUser] = useState(null);
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

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Menu</span>
      </button>

      {/* User info in top right */}
      <div className="fixed top-6 right-6 flex items-center gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
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

      {/* Main Hall content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Main Hall
          </h1>
          <p className="text-purple-300 text-xl mb-8">
            Welcome to King God Castle, {user.username}!
          </p>
          <p className="text-purple-200 mb-8">
            Choose your path and begin your adventure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-slate-700/30 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/50 transition cursor-pointer">
              <h3 className="text-white font-bold mb-2">Quest</h3>
              <p className="text-purple-300 text-sm">Start your adventure</p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/50 transition cursor-pointer">
              <h3 className="text-white font-bold mb-2">Inventory</h3>
              <p className="text-purple-300 text-sm">Manage your items</p>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/50 transition cursor-pointer">
              <h3 className="text-white font-bold mb-2">Heroes</h3>
              <p className="text-purple-300 text-sm">View your heroes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-purple-500/30 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-500/30 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-purple-500/30 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/30 pointer-events-none"></div>
    </div>
  );
};

export default MainHall;
