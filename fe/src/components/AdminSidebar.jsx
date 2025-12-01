import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  BarChart3,
  FileText,
  Crown,
  Home,
  Package,
  BookOpen,
  UserPlus,
  MapPin,
  ShoppingBag,
  Sparkles,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState({
    users: false,
    heroes: false
  });

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      title: 'Dashboard', 
      path: '/admin',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'User Management',
      color: 'text-blue-400',
      group: 'users',
      children: [
        { 
          icon: Users, 
          title: 'Manage Users', 
          path: '/admin/users',
          color: 'text-blue-400'
        },
        { 
          icon: Crown, 
          title: 'User Heroes', 
          path: '/admin/user-heroes',
          color: 'text-cyan-400'
        },
        { 
          icon: Package, 
          title: 'Inventories', 
          path: '/admin/inventories',
          color: 'text-orange-400'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Hero Management',
      color: 'text-green-400',
      group: 'heroes',
      children: [
        { 
          icon: Shield, 
          title: 'Manage Heroes', 
          path: '/admin/heroes',
          color: 'text-green-400'
        },
        { 
          icon: MapPin, 
          title: 'Regions', 
          path: '/admin/regions',
          color: 'text-emerald-400'
        }
      ]
    },
    { 
      icon: BookOpen, 
      title: 'Quests', 
      path: '/admin/quests',
      color: 'text-indigo-400'
    },
    { 
      icon: UserPlus, 
      title: 'Friends', 
      path: '/admin/friends',
      color: 'text-pink-400'
    },
    { 
      icon: ShoppingBag, 
      title: 'Items', 
      path: '/admin/items',
      color: 'text-amber-400'
    },
    { 
      icon: Sparkles, 
      title: 'Item Effects', 
      path: '/admin/item-effects',
      color: 'text-violet-400'
    },
    { 
      icon: BarChart3, 
      title: 'Analytics', 
      path: '/admin/analytics',
      color: 'text-yellow-400'
    },
    { 
      icon: FileText, 
      title: 'Reports', 
      path: '/admin/reports',
      color: 'text-pink-400'
    },
    { 
      icon: Settings, 
      title: 'Settings', 
      path: '/admin/settings',
      color: 'text-gray-400'
    }
  ];

  const isActive = (path) => location.pathname === path;

  const toggleGroup = (groupKey) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const handleItemClick = (item) => {
    navigate(item.path);
    setIsOpen(false);
  };

  const handleBackToGame = () => {
    navigate('/mainhall');
    setIsOpen(false);
  };

  const isGroupActive = (children) => {
    return children?.some(child => isActive(child.path));
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-slate-900/95 backdrop-blur-xl border-r border-white/10 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '269px' }}
      >
        {/* Menu Items */}
        <nav className="py-6 px-3 h-full flex flex-col overflow-y-auto scrollbar-thin">
          <div className="space-y-1 flex-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {/* Group with children */}
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleGroup(item.group)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        isGroupActive(item.children)
                          ? 'bg-purple-600/30 text-white'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${isGroupActive(item.children) ? 'text-white' : item.color}`} />
                      <span className="font-medium flex-1 text-left">{item.title}</span>
                      {openGroups[item.group] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {/* Dropdown children */}
                    {openGroups[item.group] && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/10 pl-2">
                        {item.children.map((child, childIndex) => (
                          <button
                            key={childIndex}
                            onClick={() => handleItemClick(child)}
                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm ${
                              isActive(child.path)
                                ? 'bg-purple-600/50 text-white shadow-lg shadow-purple-500/30'
                                : 'text-white/60 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <child.icon className={`w-4 h-4 ${isActive(child.path) ? 'text-white' : child.color}`} />
                            <span className="font-medium">{child.title}</span>
                            {isActive(child.path) && (
                              <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular menu item */
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                      isActive(item.path)
                        ? 'bg-purple-600/50 text-white shadow-lg shadow-purple-500/30'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive(item.path) ? 'text-white' : item.color}`} />
                    <span className="font-medium">{item.title}</span>
                    {isActive(item.path) && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Back to Game Button */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handleBackToGame}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <Home className="w-5 h-5 text-green-400" />
              <span className="font-medium">Back to Game</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
