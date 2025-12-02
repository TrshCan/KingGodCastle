import { 
  Star,
  Sword,
  Heart,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const BarrackHeroCard = ({ userHero, onClick, getRarity, rarityColors, getGradientColor }) => {
  const hero = userHero.hero;
  const stats = userHero.stats || hero?.baseStats;
  const rarity = getRarity(userHero);
  const heroName = hero?.name || 'Unknown Hero';
  const heroClass = hero?.heroClass?.name || 'Unknown Class';
  const heroIcon = hero?.icon || '⚔️';
  const level = userHero.level || 1;
  const hp = stats?.HP || hero?.baseStats?.HP || 0;
  const atk = stats?.ATK || hero?.baseStats?.ATK || 0;
  const spell = stats?.Spell || hero?.baseStats?.Spell || 0;

  return (
    <button
      onClick={() => onClick && onClick(userHero)}
      className="group relative bg-slate-800/40 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer text-left"
    >
      {/* Rarity Badge */}
      <div className="absolute top-3 right-3">
        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${rarityColors[rarity]}`}>
          <Star className="w-3 h-3" />
          {rarity}
        </span>
      </div>

      {/* Hero Avatar */}
      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${getGradientColor(rarity)} rounded-full flex items-center justify-center text-4xl shadow-lg`}>
        {heroIcon}
      </div>

      {/* Hero Info */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-white mb-1">{heroName}</h3>
        <p className="text-purple-300 text-sm">{heroClass}</p>
        <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 rounded-full">
          <TrendingUp className="w-3 h-3 text-purple-400" />
          <span className="text-purple-300 text-sm font-semibold">Lv {level}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-red-400">
            <Heart className="w-4 h-4" />
            <span>HP</span>
          </div>
          <span className="text-white font-semibold">{hp}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-orange-400">
            <Sword className="w-4 h-4" />
            <span>ATK</span>
          </div>
          <span className="text-white font-semibold">{atk}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles className="w-4 h-4" />
            <span>Spell</span>
          </div>
          <span className="text-white font-semibold">{spell}</span>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"></div>
    </button>
  );
};

export default BarrackHeroCard;

