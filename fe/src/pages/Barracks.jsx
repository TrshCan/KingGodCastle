import { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import GameLayout from '../components/GameLayout';
import { 
  Shield, 
  Sword, 
  Heart, 
  Zap, 
  Star,
  Plus,
  Search,
  Filter,
  TrendingUp,
  Crown
} from 'lucide-react';

const Barracks = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRarity, setFilterRarity] = useState('all');

  // Mock hero data
  const heroes = [
    {
      id: 1,
      name: 'Sir Galahad',
      class: 'Knight',
      level: 45,
      rarity: 'legendary',
      hp: 2500,
      attack: 180,
      defense: 220,
      avatar: '⚔️',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 2,
      name: 'Aria Moonwhisper',
      class: 'Mage',
      level: 42,
      rarity: 'epic',
      hp: 1800,
      attack: 250,
      defense: 120,
      avatar: '🔮',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      name: 'Thorgrim Ironbeard',
      class: 'Warrior',
      level: 48,
      rarity: 'legendary',
      hp: 3000,
      attack: 200,
      defense: 250,
      avatar: '🪓',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 4,
      name: 'Luna Shadowstep',
      class: 'Assassin',
      level: 40,
      rarity: 'epic',
      hp: 1600,
      attack: 280,
      defense: 100,
      avatar: '🗡️',
      color: 'from-gray-600 to-slate-600'
    },
    {
      id: 5,
      name: 'Elara Lightbringer',
      class: 'Cleric',
      level: 38,
      rarity: 'rare',
      hp: 2000,
      attack: 120,
      defense: 180,
      avatar: '✨',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 6,
      name: 'Ragnar Stormcaller',
      class: 'Shaman',
      level: 43,
      rarity: 'epic',
      hp: 2200,
      attack: 190,
      defense: 160,
      avatar: '⚡',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 7,
      name: 'Sylvanas Windrunner',
      class: 'Ranger',
      level: 41,
      rarity: 'rare',
      hp: 1900,
      attack: 220,
      defense: 140,
      avatar: '🏹',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 8,
      name: 'Draven Bloodfang',
      class: 'Berserker',
      level: 46,
      rarity: 'legendary',
      hp: 2800,
      attack: 260,
      defense: 180,
      avatar: '🩸',
      color: 'from-red-700 to-red-900'
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
    return matchesSearch && matchesRarity;
  });

  const handleHeroClick = (hero) => {
    toast.info(`${hero.name} details coming soon! 🚧`);
  };

  const handleRecruitHero = () => {
    toast.info('Hero recruitment is coming soon! 🚧');
  };

  return (
    <GameLayout>
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Shield className="w-12 h-12 text-blue-400" />
              Barracks
            </h2>
            <p className="text-purple-300 text-xl">
              Manage and recruit your legendary heroes
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Total Heroes</p>
                  <p className="text-white text-2xl font-bold">{heroes.length}</p>
                </div>
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Avg Level</p>
                  <p className="text-white text-2xl font-bold">
                    {Math.round(heroes.reduce((sum, h) => sum + h.level, 0) / heroes.length)}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Legendary</p>
                  <p className="text-white text-2xl font-bold">
                    {heroes.filter(h => h.rarity === 'legendary').length}
                  </p>
                </div>
                <Crown className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Total Power</p>
                  <p className="text-white text-2xl font-bold">
                    {(heroes.reduce((sum, h) => sum + h.attack + h.defense, 0) / 100).toFixed(1)}K
                  </p>
                </div>
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search heroes by name or class..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
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

              <button
                onClick={handleRecruitHero}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Plus className="w-5 h-5" />
                <span>Recruit</span>
              </button>
            </div>
          </div>

          {/* Heroes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredHeroes.map((hero) => (
              <button
                key={hero.id}
                onClick={() => handleHeroClick(hero)}
                className="group relative bg-slate-800/40 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer text-left"
              >
                {/* Rarity Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${rarityColors[hero.rarity]}`}>
                    <Star className="w-3 h-3" />
                    {hero.rarity}
                  </span>
                </div>

                {/* Hero Avatar */}
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${hero.color} rounded-full flex items-center justify-center text-4xl shadow-lg`}>
                  {hero.avatar}
                </div>

                {/* Hero Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-1">{hero.name}</h3>
                  <p className="text-purple-300 text-sm">{hero.class}</p>
                  <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 rounded-full">
                    <TrendingUp className="w-3 h-3 text-purple-400" />
                    <span className="text-purple-300 text-sm font-semibold">Lv {hero.level}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2">
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

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"></div>
              </button>
            ))}
          </div>

          {/* No Results */}
          {filteredHeroes.length === 0 && (
            <div className="text-center py-16">
              <Shield className="w-16 h-16 text-purple-400/50 mx-auto mb-4" />
              <p className="text-purple-300 text-lg">No heroes found</p>
              <p className="text-purple-400/70 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </GameLayout>
  );
};

export default Barracks;
