import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import { 
  Sword, 
  Shield, 
  Backpack, 
  Map, 
  Users, 
  Trophy,
  Home,
  Crown,
  Sparkles
} from 'lucide-react';

const GameSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const menuItems = [
    { 
      icon: Home, 
      title: 'Main Hall', 
      path: '/mainhall',
      color: 'text-purple-400',
      implemented: true
    },
    { 
      icon: Sword, 
      title: 'Quest', 
      path: '/quest',
      color: 'text-red-400',
      implemented: true
    },
    { 
      icon: Shield, 
      title: 'Heroes', 
      path: '/heroes',
      color: 'text-blue-400',
      implemented: true
    },
    { 
      icon: Sparkles, 
      title: 'Summon', 
      path: '/summon',
      color: 'text-pink-400',
      implemented: true
    },
    { 
      icon: Backpack, 
      title: 'Inventory', 
      path: '/inventory',
      color: 'text-green-400',
      implemented: false
    },
    { 
      icon: Map, 
      title: 'World Map', 
      path: '/worldmap',
      color: 'text-teal-400',
      implemented: false
    },
    { 
      icon: Users, 
      title: 'Guild', 
      path: '/guild',
      color: 'text-yellow-400',
      implemented: false
    },
    { 
      icon: Trophy, 
      title: 'Arena', 
      path: '/arena',
      color: 'text-indigo-400',
      implemented: false
    }
  ];

  const isActive = (path) => location.pathname === path;

  const handleItemClick = (item) => {
    if (item.implemented) {
      navigate(item.path);
      setIsOpen(false); // Close sidebar after navigation
    } else {
      toast.info(`${item.title} is coming soon! 🚧`);
    }
  };

  return (
    <>
      {/* Overlay - Click to close sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full bg-slate-900/95 backdrop-blur-xl border-r border-white/10 z-30 transition-transform duration-300 w-64 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo/Title */}
        <div className="h-20 flex items-center justify-center border-b border-white/10 px-4">
          <div className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-bold text-white">KING GOD CASTLE</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="py-6 px-3">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive(item.path)
                    ? 'bg-purple-600/50 text-white shadow-lg shadow-purple-500/30'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                } ${!item.implemented ? 'opacity-70' : ''}`}
              >
                <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-white' : item.color}`} />
                <span className="font-medium">{item.title}</span>
                {!item.implemented && (
                  <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
                {isActive(item.path) && item.implemented && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

      </div>
    </>
  );
};

export default GameSidebar;
