import { 
  Edit,
  Trash2,
  Star,
  Sword,
  Heart,
  Shield,
  TrendingUp,
  Eye
} from 'lucide-react';

const AdminHeroCard = ({ hero, onEdit, onDelete, onView, rarityColors = {} }) => {
  // Determine rarity based on hero data or default to 'common'
  // You can customize this logic based on your game's rarity system
  const getRarity = () => {
    // If hero has a rarity field, use it
    if (hero.rarity) return hero.rarity;
    
    // Otherwise, determine based on stats or other criteria
    const hp = hero.baseStats?.HP || 0;
    if (hp >= 2500) return 'legendary';
    if (hp >= 2000) return 'epic';
    if (hp >= 1500) return 'rare';
    return 'common';
  };

  const rarity = getRarity();
  const defaultRarityColors = {
    unique: 'text-pink-400 bg-pink-500/20 border-pink-500/50',
    mythic: 'text-red-400 bg-red-500/20 border-red-500/50',
    legendary: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50',
    epic: 'text-purple-400 bg-purple-500/20 border-purple-500/50',
    rare: 'text-blue-400 bg-blue-500/20 border-blue-500/50',
    uncommon: 'text-green-400 bg-green-500/20 border-green-500/50',
    common: 'text-gray-400 bg-gray-500/20 border-gray-500/50'
  };

  const rarityColor = rarityColors[rarity] || defaultRarityColors[rarity] || defaultRarityColors.common;
  
  // Get gradient color based on rarity
  const getGradientColor = () => {
    switch (rarity) {
      case 'unique':
        return 'from-pink-600 to-rose-600';
      case 'mythic':
        return 'from-red-600 to-orange-600';
      case 'legendary':
        return 'from-yellow-600 to-orange-600';
      case 'epic':
        return 'from-purple-600 to-pink-600';
      case 'rare':
        return 'from-blue-600 to-cyan-600';
      case 'uncommon':
        return 'from-green-600 to-emerald-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  const heroClass = hero.heroClass?.name || hero.class || 'Unknown';
  const heroIcon = hero.icon || hero.avatar || '⚔️';
  const userCount = hero.userHeroes?.length || hero.users || 0;
  const level = hero.level; // Optional - only show if provided

  return (
    <div 
      className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
      onClick={() => onView && onView(hero)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${getGradientColor()} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
          {heroIcon}
        </div>
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${rarityColor}`}>
          <Star className="w-3 h-3" />
          {rarity}
        </span>
      </div>

      {/* Hero Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1">{hero.name}</h3>
        <p className="text-gray-400 text-sm">{heroClass}</p>
        {hero.title && (
          <p className="text-gray-500 text-xs mt-1 italic">{hero.title}</p>
        )}
        <div className="mt-2 flex items-center gap-2">
          {level && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">
              <TrendingUp className="w-3 h-3" />
              Lv {level}
            </span>
          )}
          <span className="text-gray-400 text-xs">{userCount} {userCount === 1 ? 'user' : 'users'}</span>
        </div>
      </div>

      {/* Stats */}
      {hero.baseStats && (
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-red-400">
              <Heart className="w-4 h-4" />
              <span>HP</span>
            </div>
            <span className="text-white font-semibold">{hero.baseStats.HP || 0}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-orange-400">
              <Sword className="w-4 h-4" />
              <span>ATK</span>
            </div>
            <span className="text-white font-semibold">{hero.baseStats.ATK || 0}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-blue-400">
              <Shield className="w-4 h-4" />
              <span>DEF</span>
            </div>
            <span className="text-white font-semibold">
              {hero.baseStats.Physical_DEF || hero.baseStats.Spell_DEF || 0}
            </span>
          </div>
        </div>
      )}

      {/* Actions */}
      {(onEdit || onDelete || onView) && (
        <div className="flex gap-2 pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
          {onView && (
            <button
              onClick={() => onView(hero)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span className="text-sm font-semibold">View</span>
            </button>
          )}
          {onEdit && (
            <button
              onClick={() => onEdit(hero)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition cursor-pointer"
            >
              <Edit className="w-4 h-4" />
              <span className="text-sm font-semibold">Edit</span>
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(hero)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Delete</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminHeroCard;

