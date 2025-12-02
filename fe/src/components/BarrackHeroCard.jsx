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

  // Get illustration path
  const getIllustrationPath = () => {
    if (hero?.illustration) {
      // If it's a full URL, use it directly
      if (hero.illustration.startsWith('http')) {
        return hero.illustration;
      }
      // If it's a relative path, prepend the assets path
      return `/src/assets/img/heroes/illustration/${hero.illustration}`;
    }
    return null;
  };

  const illustrationPath = getIllustrationPath();

  return (
    <button
      onClick={() => onClick && onClick(userHero)}
      className="group relative bg-slate-800/40 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer text-left"
    >
      {/* Rarity Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${rarityColors[rarity]}`}>
          <Star className="w-3 h-3" />
          {rarity}
        </span>
      </div>

      {/* Level Badge */}
      <div className="absolute top-3 left-3 z-10">
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full">
          <TrendingUp className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-bold">Lv {level}</span>
        </div>
      </div>

      {/* Hero Illustration - Large Background */}
      <div className="relative h-48 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        {illustrationPath ? (
          <>
            <img 
              src={illustrationPath} 
              alt={heroName}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                // Fallback to gradient with icon
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColor(rarity)} flex items-center justify-center text-6xl hidden`}>
              {heroIcon}
            </div>
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColor(rarity)} flex items-center justify-center text-6xl`}>
            {heroIcon}
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
      </div>

      {/* Hero Info */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white mb-1 truncate">{heroName}</h3>
          <p className="text-purple-300 text-sm">{heroClass}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-900/50 rounded-lg p-2 text-center">
            <Heart className="w-4 h-4 text-red-400 mx-auto mb-1" />
            <div className="text-xs text-gray-400">HP</div>
            <div className="text-sm font-bold text-white">{hp}</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-2 text-center">
            <Sword className="w-4 h-4 text-orange-400 mx-auto mb-1" />
            <div className="text-xs text-gray-400">ATK</div>
            <div className="text-sm font-bold text-white">{atk}</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-2 text-center">
            <Sparkles className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-xs text-gray-400">Spell</div>
            <div className="text-sm font-bold text-white">{spell}</div>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"></div>
    </button>
  );
};

export default BarrackHeroCard;

