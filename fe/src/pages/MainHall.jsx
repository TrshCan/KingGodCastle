import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import GameLayout from '../components/GameLayout';
import { 
  Sword, 
  Shield, 
  Backpack, 
  Map, 
  Users, 
  Trophy,
  Crown,
  Sparkles
} from 'lucide-react';

const MainHall = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const menuItems = [
    { 
      icon: Sword, 
      title: 'Quest', 
      description: 'Embark on epic adventures',
      color: 'from-red-600 to-orange-600',
      hoverColor: 'hover:from-red-500 hover:to-orange-500',
      path: '/quest',
      implemented: true
    },
    { 
      icon: Shield, 
      title: 'Heroes', 
      description: 'Manage your champions',
      color: 'from-blue-600 to-cyan-600',
      hoverColor: 'hover:from-blue-500 hover:to-cyan-500',
      path: '/heroes',
      implemented: true
    },
    { 
      icon: Sparkles, 
      title: 'Summon', 
      description: 'Call forth new heroes',
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-500 hover:to-pink-500',
      path: '/summon',
      implemented: true
    },
    { 
      icon: Backpack, 
      title: 'Inventory', 
      description: 'View your treasures',
      color: 'from-green-600 to-emerald-600',
      hoverColor: 'hover:from-green-500 hover:to-emerald-500',
      path: '/inventory',
      implemented: false
    },
    { 
      icon: Map, 
      title: 'World Map', 
      description: 'Explore the kingdom',
      color: 'from-teal-600 to-cyan-600',
      hoverColor: 'hover:from-teal-500 hover:to-cyan-500',
      path: '/worldmap',
      implemented: false
    },
    { 
      icon: Users, 
      title: 'Guild', 
      description: 'Join forces with allies',
      color: 'from-yellow-600 to-amber-600',
      hoverColor: 'hover:from-yellow-500 hover:to-amber-500',
      path: '/guild',
      implemented: false
    },
    { 
      icon: Trophy, 
      title: 'Arena', 
      description: 'Prove your strength',
      color: 'from-indigo-600 to-purple-600',
      hoverColor: 'hover:from-indigo-500 hover:to-purple-500',
      path: '/arena',
      implemented: false
    }
  ];

  const handleItemClick = (item) => {
    if (item.implemented) {
      navigate(item.path);
    } else {
      toast.info(`${item.title} is coming soon! 🚧`);
    }
  };

  return (
    <GameLayout>
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Crown className="w-12 h-12 text-yellow-400" />
              Main Hall
            </h2>
            <p className="text-purple-300 text-xl">
              Choose your adventure and conquer the kingdom
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className={`group relative bg-gradient-to-br ${item.color} ${item.hoverColor} p-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 cursor-pointer overflow-hidden ${
                  !item.implemented ? 'opacity-90' : ''
                }`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <item.icon className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                  {!item.implemented && (
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </button>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Level</p>
                  <p className="text-white text-3xl font-bold">42</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Heroes</p>
                  <p className="text-white text-3xl font-bold">12</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Quests</p>
                  <p className="text-white text-3xl font-bold">8/15</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Map className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Rank</p>
                  <p className="text-white text-3xl font-bold">#156</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default MainHall;
