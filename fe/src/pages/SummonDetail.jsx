import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';
import GameLayout from '../components/GameLayout';
import { 
  Sparkles, 
  Star, 
  Gem, 
  Scroll,
  Crown,
  Zap,
  ArrowLeft,
  Info
} from 'lucide-react';

const SummonDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [isSummoning, setIsSummoning] = useState(false);

  const summonConfig = {
    'hero': {
      title: 'Hero Summon',
      description: 'Summon powerful heroes to join your adventure',
      icon: Star,
      color: 'from-blue-600 to-cyan-600',
      singleCost: 100,
      multiCost: 900,
      rates: [
        { rarity: 'Legendary', rate: '2%', color: 'text-yellow-400' },
        { rarity: 'Epic', rate: '10%', color: 'text-purple-400' },
        { rarity: 'Rare', rate: '30%', color: 'text-blue-400' },
        { rarity: 'Common', rate: '58%', color: 'text-gray-400' }
      ]
    },
    'legacy': {
      title: 'Legacy Summon',
      description: 'Summon ancient legendary heroes from the past',
      icon: Crown,
      color: 'from-yellow-600 to-orange-600',
      singleCost: 150,
      multiCost: 1350,
      rates: [
        { rarity: 'Legendary', rate: '5%', color: 'text-yellow-400' },
        { rarity: 'Epic', rate: '15%', color: 'text-purple-400' },
        { rarity: 'Rare', rate: '35%', color: 'text-blue-400' },
        { rarity: 'Common', rate: '45%', color: 'text-gray-400' }
      ]
    },
    'relic': {
      title: 'Relic Summon',
      description: 'Discover mystical relics and powerful artifacts',
      icon: Gem,
      color: 'from-purple-600 to-pink-600',
      singleCost: 80,
      multiCost: 720,
      rates: [
        { rarity: 'Legendary', rate: '3%', color: 'text-yellow-400' },
        { rarity: 'Epic', rate: '12%', color: 'text-purple-400' },
        { rarity: 'Rare', rate: '35%', color: 'text-blue-400' },
        { rarity: 'Common', rate: '50%', color: 'text-gray-400' }
      ]
    },
    'card': {
      title: 'Card Summon',
      description: 'Collect powerful cards to enhance your abilities',
      icon: Scroll,
      color: 'from-green-600 to-emerald-600',
      singleCost: 50,
      multiCost: 450,
      rates: [
        { rarity: 'Legendary', rate: '1%', color: 'text-yellow-400' },
        { rarity: 'Epic', rate: '8%', color: 'text-purple-400' },
        { rarity: 'Rare', rate: '25%', color: 'text-blue-400' },
        { rarity: 'Common', rate: '66%', color: 'text-gray-400' }
      ]
    },
    'legacy-banner': {
      title: 'Legacy Banner',
      description: 'Limited time banner featuring exclusive legacy heroes',
      icon: Zap,
      color: 'from-red-600 to-orange-600',
      singleCost: 200,
      multiCost: 1800,
      special: true,
      rates: [
        { rarity: 'Legendary', rate: '8%', color: 'text-yellow-400' },
        { rarity: 'Epic', rate: '20%', color: 'text-purple-400' },
        { rarity: 'Rare', rate: '40%', color: 'text-blue-400' },
        { rarity: 'Common', rate: '32%', color: 'text-gray-400' }
      ]
    },
    'hero-banner': {
      title: 'Hero Banner',
      description: 'Featured hero with increased summon rates',
      icon: Sparkles,
      color: 'from-indigo-600 to-purple-600',
      singleCost: 120,
      multiCost: 1080,
      special: true,
      rates: [
        { rarity: 'Featured Hero', rate: '5%', color: 'text-pink-400' },
        { rarity: 'Legendary', rate: '3%', color: 'text-yellow-400' },
        { rarity: 'Epic', rate: '15%', color: 'text-purple-400' },
        { rarity: 'Rare', rate: '35%', color: 'text-blue-400' },
        { rarity: 'Common', rate: '42%', color: 'text-gray-400' }
      ]
    }
  };

  const config = summonConfig[type] || summonConfig['hero'];
  const IconComponent = config.icon;

  const handleSummon = (count) => {
    setIsSummoning(true);
    const cost = count === 1 ? config.singleCost : config.multiCost;
    
    setTimeout(() => {
      setIsSummoning(false);
      toast.success(`Summoned ${count} time(s)! Cost: ${cost} Gems 💎`);
    }, 2000);
  };

  return (
    <GameLayout>
      <div className="relative z-10 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/summon')}
            className="flex items-center gap-2 text-white/70 hover:text-white transition mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Summon Portal</span>
          </button>

          {/* Header */}
          <div className={`bg-gradient-to-br ${config.color} rounded-2xl p-8 mb-8 relative overflow-hidden`}>
            {config.special && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/30 border border-yellow-400/50 rounded-full text-xs font-bold text-yellow-300">
                  <Star className="w-3 h-3" />
                  LIMITED
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-14 h-14 text-white drop-shadow-lg" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{config.title}</h2>
                <p className="text-white/90 text-lg">{config.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Summon Actions */}
            <div className="lg:col-span-2 space-y-6">
              {/* Single Summon */}
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Single Summon</h3>
                    <p className="text-gray-400 text-sm">Summon once</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <Gem className="w-5 h-5 text-purple-400" />
                      <span className="text-2xl font-bold text-white">{config.singleCost}</span>
                    </div>
                    <p className="text-gray-400 text-xs">per summon</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSummon(1)}
                  disabled={isSummoning}
                  className={`w-full py-4 bg-gradient-to-r ${config.color} hover:opacity-90 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer`}
                >
                  {isSummoning ? 'Summoning...' : 'Summon x1'}
                </button>
              </div>

              {/* Multi Summon */}
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Multi Summon</h3>
                    <p className="text-gray-400 text-sm">Summon 10 times with discount</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <Gem className="w-5 h-5 text-purple-400" />
                      <span className="text-2xl font-bold text-white">{config.multiCost}</span>
                    </div>
                    <p className="text-green-400 text-xs font-semibold">Save {config.singleCost * 10 - config.multiCost} Gems!</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSummon(10)}
                  disabled={isSummoning}
                  className={`w-full py-4 bg-gradient-to-r ${config.color} hover:opacity-90 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer`}
                >
                  {isSummoning ? 'Summoning...' : 'Summon x10'}
                </button>
              </div>

              {/* Currency Display */}
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Your Resources</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Gem className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Gems</p>
                      <p className="text-white text-xl font-bold">2,450</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Tickets</p>
                      <p className="text-white text-xl font-bold">15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rates Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-purple-400" />
                  Drop Rates
                </h3>
                <div className="space-y-3">
                  {config.rates.map((rate, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className={`w-4 h-4 ${rate.color}`} />
                        <span className={`font-semibold ${rate.color}`}>{rate.rarity}</span>
                      </div>
                      <span className="text-white font-bold">{rate.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-3">Tips</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Multi summon guarantees at least one rare or higher</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Use summon tickets for free summons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Check daily for bonus summon events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default SummonDetail;
