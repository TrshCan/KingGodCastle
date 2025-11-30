import { useState } from 'react';
import { useToast } from '../../contexts/ToastContext';
import AdminLayout from '../../components/AdminLayout';
import { 
  Shield, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Plus,
  Star,
  Sword,
  Heart,
  TrendingUp
} from 'lucide-react';

const ManageHeroes = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRarity, setFilterRarity] = useState('all');
  const [filterClass, setFilterClass] = useState('all');

  // Mock hero data
  const heroes = [
    {
      id: 1,
      name: 'Sir Galahad',
      class: 'Knight',
      rarity: 'legendary',
      level: 50,
      hp: 2500,
      attack: 180,
      defense: 220,
      avatar: '⚔️',
      users: 1234,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 2,
      name: 'Aria Moonwhisper',
      class: 'Mage',
      rarity: 'epic',
      level: 45,
      hp: 1800,
      attack: 250,
      defense: 120,
      avatar: '🔮',
      users: 1156,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      name: 'Thorgrim Ironbeard',
      class: 'Warrior',
      rarity: 'legendary',
      level: 50,
      hp: 3000,
      attack: 200,
      defense: 250,
      avatar: '🪓',
      users: 1089,
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 4,
      name: 'Luna Shadowstep',
      class: 'Assassin',
      rarity: 'epic',
      level: 45,
      hp: 1600,
      attack: 280,
      defense: 100,
      avatar: '🗡️',
      users: 987,
      color: 'from-gray-600 to-slate-600'
    },
    {
      id: 5,
      name: 'Elara Lightbringer',
      class: 'Cleric',
      rarity: 'rare',
      level: 40,
      hp: 2000,
      attack: 120,
      defense: 180,
      avatar: '✨',
      users: 876,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 6,
      name: 'Ragnar Stormcaller',
      class: 'Shaman',
      rarity: 'epic',
      level: 45,
      hp: 2200,
      attack: 190,
      defense: 160,
      avatar: '⚡',
      users: 765,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const rarityColors = {
    legendary: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50',
    epic: 'text-purple-400 bg-purple-500/20 border-purple-500/50',
    rare: 'text-blue-400 bg-blue-500/20 border-blue-500/50',
    common: 'text-gray-400 bg-gray-500/20 border-gray-500/50'
  };

  const filteredHeroes = heroes.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hero.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = filterRarity === 'all' || hero.rarity === filterRarity;
    const matchesClass = filterClass === 'all' || hero.class === filterClass;
    return matchesSearch && matchesRarity && matchesClass;
  });

  const handleEdit = (hero) => {
    toast.info(`Editing ${hero.name} - Coming soon! 🚧`);
  };

  const handleDelete = (hero) => {
    toast.info(`Delete ${hero.name} - Coming soon! 🚧`);
  };

  const handleAddHero = () => {
    toast.info('Add new hero - Coming soon! 🚧');
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-400" />
                Manage Heroes
              </h2>
              <p className="text-gray-400">Create, edit, and manage game heroes</p>
            </div>
            <button
              onClick={handleAddHero}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Hero</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Heroes</p>
              <p className="text-white text-2xl font-bold">{heroes.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Legendary</p>
              <p className="text-yellow-400 text-2xl font-bold">
                {heroes.filter(h => h.rarity === 'legendary').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Epic</p>
              <p className="text-purple-400 text-2xl font-bold">
                {heroes.filter(h => h.rarity === 'epic').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Users</p>
              <p className="text-blue-400 text-2xl font-bold">
                {heroes.reduce((sum, h) => sum + h.users, 0).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search heroes by name or class..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterRarity}
                  onChange={(e) => setFilterRarity(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
                >
                  <option value="all">All Rarities</option>
                  <option value="legendary">Legendary</option>
                  <option value="epic">Epic</option>
                  <option value="rare">Rare</option>
                  <option value="common">Common</option>
                </select>
              </div>

              <div className="relative">
                <select
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                  className="px-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
                >
                  <option value="all">All Classes</option>
                  <option value="Knight">Knight</option>
                  <option value="Mage">Mage</option>
                  <option value="Warrior">Warrior</option>
                  <option value="Assassin">Assassin</option>
                  <option value="Cleric">Cleric</option>
                  <option value="Shaman">Shaman</option>
                </select>
              </div>
            </div>
          </div>

          {/* Heroes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHeroes.map((hero) => (
              <div
                key={hero.id}
                className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${hero.color} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                    {hero.avatar}
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${rarityColors[hero.rarity]}`}>
                    <Star className="w-3 h-3" />
                    {hero.rarity}
                  </span>
                </div>

                {/* Hero Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{hero.name}</h3>
                  <p className="text-gray-400 text-sm">{hero.class}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">
                      <TrendingUp className="w-3 h-3" />
                      Lv {hero.level}
                    </span>
                    <span className="text-gray-400 text-xs">{hero.users} users</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-red-400">
                      <Heart className="w-4 h-4" />
                      <span>HP</span>
                    </div>
                    <span className="text-white font-semibold">{hero.hp}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-orange-400">
                      <Sword className="w-4 h-4" />
                      <span>ATK</span>
                    </div>
                    <span className="text-white font-semibold">{hero.attack}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Shield className="w-4 h-4" />
                      <span>DEF</span>
                    </div>
                    <span className="text-white font-semibold">{hero.defense}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEdit(hero)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(hero)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredHeroes.length === 0 && (
            <div className="text-center py-16">
              <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No heroes found</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageHeroes;
