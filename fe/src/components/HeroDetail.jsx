import { X, Shield, MapPin, Users, Heart, Sword, Sparkles } from 'lucide-react';

const HeroDetail = ({ hero, onClose }) => {
  if (!hero) return null;

  const getRarity = () => {
    const hp = hero.baseStats?.HP || 0;
    if (hp >= 2500) return 'legendary';
    if (hp >= 2000) return 'epic';
    if (hp >= 1500) return 'rare';
    return 'common';
  };

  const rarity = getRarity();
  const rarityColors = {
    legendary: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50',
    epic: 'text-purple-400 bg-purple-500/20 border-purple-500/50',
    rare: 'text-blue-400 bg-blue-500/20 border-blue-500/50',
    common: 'text-gray-400 bg-gray-500/20 border-gray-500/50'
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Hero Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Hero Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Hero Header */}
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-5xl shadow-lg">
                  {hero.icon || '⚔️'}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-1">{hero.name}</h3>
                  {hero.title && (
                    <p className="text-gray-400 italic mb-2">{hero.title}</p>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${rarityColors[rarity]}`}>
                      {rarity}
                    </span>
                    {hero.heroClass && (
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 border border-blue-500/50">
                        {hero.heroClass.name}
                      </span>
                    )}
                    {hero.region && (
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300 border border-green-500/50 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {hero.region.name}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              {hero.description && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                  <p className="text-gray-300">{hero.description}</p>
                </div>
              )}

              {/* Base Stats */}
              {hero.baseStats && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Base Stats
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-red-400 mb-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">HP</span>
                      </div>
                      <p className="text-white text-xl font-bold">{hero.baseStats.HP || 0}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-orange-400 mb-1">
                        <Sword className="w-4 h-4" />
                        <span className="text-sm">ATK</span>
                      </div>
                      <p className="text-white text-xl font-bold">{hero.baseStats.ATK || 0}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-blue-400 mb-1">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">DEF</span>
                      </div>
                      <p className="text-white text-xl font-bold">
                        {hero.baseStats.Physical_DEF || hero.baseStats.Spell_DEF || 0}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills */}
              {hero.skills && hero.skills.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Skills
                  </h4>
                  <div className="space-y-2">
                    {hero.skills.map((skill) => (
                      <div key={skill.id} className="bg-slate-900/50 rounded-lg p-3">
                        <h5 className="text-white font-semibold mb-1">{skill.name}</h5>
                        {skill.description && (
                          <p className="text-gray-400 text-sm">{skill.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Information</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">ID:</span>
                    <span className="text-white ml-2">{hero.id}</span>
                  </div>
                  {hero.region && (
                    <div>
                      <span className="text-gray-400">Region:</span>
                      <span className="text-white ml-2">{hero.region.name}</span>
                    </div>
                  )}
                  {hero.heroClass && (
                    <div>
                      <span className="text-gray-400">Class:</span>
                      <span className="text-white ml-2">{hero.heroClass.name}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{hero.userHeroes?.length || 0} users own this hero</span>
                  </div>
                </div>
              </div>

              {/* Images */}
              {(hero.illustration || hero.card) && (
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Media</h4>
                  <div className="space-y-3">
                    {hero.illustration && (
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Illustration:</p>
                        <img 
                          src={hero.illustration} 
                          alt={`${hero.name} illustration`}
                          className="w-full rounded-lg"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    )}
                    {hero.card && (
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Card:</p>
                        <img 
                          src={hero.card} 
                          alt={`${hero.name} card`}
                          className="w-full rounded-lg"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;

