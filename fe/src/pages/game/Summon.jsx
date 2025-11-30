import { useNavigate } from 'react-router-dom';
import GameLayout from '../../components/GameLayout';
import { 
  Sparkles, 
  Star, 
  Gem, 
  Scroll,
  Crown,
  Zap
} from 'lucide-react';

const Summon = () => {
  const navigate = useNavigate();

  const summonTypes = [
    {
      id: 'hero',
      title: 'Hero Summon',
      description: 'Summon powerful heroes',
      icon: Star,
      color: 'from-blue-600 to-cyan-600',
      hoverColor: 'hover:from-blue-500 hover:to-cyan-500',
      path: '/summon/hero',
      cost: '100 Gems',
      special: false
    },
    {
      id: 'legacy',
      title: 'Legacy Summon',
      description: 'Ancient legendary heroes',
      icon: Crown,
      color: 'from-yellow-600 to-orange-600',
      hoverColor: 'hover:from-yellow-500 hover:to-orange-500',
      path: '/summon/legacy',
      cost: '150 Gems',
      special: false
    },
    {
      id: 'relic',
      title: 'Relic Summon',
      description: 'Mystical relics and artifacts',
      icon: Gem,
      color: 'from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-500 hover:to-pink-500',
      path: '/summon/relic',
      cost: '80 Gems',
      special: false
    },
    {
      id: 'card',
      title: 'Card Summon',
      description: 'Collect powerful cards',
      icon: Scroll,
      color: 'from-green-600 to-emerald-600',
      hoverColor: 'hover:from-green-500 hover:to-emerald-500',
      path: '/summon/card',
      cost: '50 Gems',
      special: false
    },
    {
      id: 'legacy-banner',
      title: 'Legacy Banner',
      description: 'Limited time legacy heroes',
      icon: Zap,
      color: 'from-red-600 to-orange-600',
      hoverColor: 'hover:from-red-500 hover:to-orange-500',
      path: '/summon/legacy-banner',
      cost: '200 Gems',
      special: true
    },
    {
      id: 'hero-banner',
      title: 'Hero Banner',
      description: 'Featured hero rate up',
      icon: Sparkles,
      color: 'from-indigo-600 to-purple-600',
      hoverColor: 'hover:from-indigo-500 hover:to-purple-500',
      path: '/summon/hero-banner',
      cost: '120 Gems',
      special: true
    }
  ];

  const handleSummonClick = (summon) => {
    navigate(summon.path);
  };

  return (
    <GameLayout>
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-12 h-12 text-purple-400" />
              Summon Portal
            </h2>
            <p className="text-purple-300 text-xl">
              Call forth legendary heroes and powerful artifacts
            </p>
          </div>

          {/* Currency Display */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/10">
              <div className="flex items-center gap-3">
                <Gem className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-gray-400 text-xs">Gems</p>
                  <p className="text-white text-xl font-bold">2,450</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/10">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-gray-400 text-xs">Summon Tickets</p>
                  <p className="text-white text-xl font-bold">15</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Summons */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Regular Summons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {summonTypes.filter(s => !s.special).map((summon) => (
                <button
                  key={summon.id}
                  onClick={() => handleSummonClick(summon)}
                  className={`group relative bg-gradient-to-br ${summon.color} ${summon.hoverColor} p-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 cursor-pointer overflow-hidden`}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <summon.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{summon.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{summon.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                      <Gem className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">{summon.cost}</span>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Special Banners */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Special Banners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {summonTypes.filter(s => s.special).map((summon) => (
                <button
                  key={summon.id}
                  onClick={() => handleSummonClick(summon)}
                  className={`group relative bg-gradient-to-br ${summon.color} ${summon.hoverColor} p-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 cursor-pointer overflow-hidden`}
                >
                  {/* Special Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/30 border border-yellow-400/50 rounded-full text-xs font-bold text-yellow-300">
                      <Star className="w-3 h-3" />
                      LIMITED
                    </span>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <summon.icon className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{summon.title}</h3>
                        <p className="text-white/80 text-sm mb-3">{summon.description}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                          <Gem className="w-5 h-5 text-white" />
                          <span className="text-white font-bold">{summon.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default Summon;
