import { useState, useEffect } from "react";
import { useToast } from "../../contexts/ToastContext";
import { getMyHeroes } from "../../api/graphql/userHero";
import GameLayout from "../../components/GameLayout";
import BarrackHeroCard from "../../components/BarrackHeroCard";
import {
  Shield,
  Zap,
  Plus,
  Search,
  Filter,
  Crown,
  TrendingUp,
} from "lucide-react";

const Barracks = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRarity, setFilterRarity] = useState("all");
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      setLoading(true);
      const data = await getMyHeroes();
      setHeroes(data || []);
    } catch (error) {
      toast.error(error.message);
      setHeroes([]);
    } finally {
      setLoading(false);
    }
  };

  // Get rarity from database, fallback to calculated if not available
  const getRarity = (userHero) => {
    if (userHero.hero?.rarity) return userHero.hero.rarity;
    // Fallback calculation based on HP
    const hp = userHero.stats?.HP || userHero.hero?.baseStats?.HP || 0;
    if (hp >= 2500) return "legendary";
    if (hp >= 2000) return "epic";
    if (hp >= 1500) return "rare";
    return "common";
  };

  const rarityColors = {
    unique: "text-pink-400 bg-pink-500/20 border-pink-500/50",
    mythic: "text-red-400 bg-red-500/20 border-red-500/50",
    legendary: "text-yellow-400 bg-yellow-500/20 border-yellow-500/50",
    epic: "text-purple-400 bg-purple-500/20 border-purple-500/50",
    rare: "text-blue-400 bg-blue-500/20 border-blue-500/50",
    uncommon: "text-green-400 bg-green-500/20 border-green-500/50",
    common: "text-gray-400 bg-gray-500/20 border-gray-500/50",
  };

  const getGradientColor = (rarity) => {
    switch (rarity) {
      case "unique":
        return "from-pink-600 to-rose-600";
      case "mythic":
        return "from-red-600 to-orange-600";
      case "legendary":
        return "from-yellow-600 to-orange-600";
      case "epic":
        return "from-purple-600 to-pink-600";
      case "rare":
        return "from-blue-600 to-cyan-600";
      case "uncommon":
        return "from-green-600 to-emerald-600";
      default:
        return "from-gray-600 to-slate-600";
    }
  };

  const filteredHeroes = heroes.filter((userHero) => {
    const heroName = userHero.hero?.name || "";
    const heroClass = userHero.hero?.heroClass?.name || "";
    const matchesSearch =
      heroName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      heroClass.toLowerCase().includes(searchTerm.toLowerCase());
    const rarity = getRarity(userHero);
    const matchesRarity = filterRarity === "all" || rarity === filterRarity;
    return matchesSearch && matchesRarity;
  });

  const handleHeroClick = (userHero) => {
    const heroName = userHero.hero?.name || "Unknown Hero";
    toast.info(`${heroName} details coming soon! 🚧`);
  };

  if (loading) {
    return (
      <GameLayout>
        <div className="relative z-10 p-6 flex items-center justify-center min-h-screen">
          <div className="text-white">Loading heroes...</div>
        </div>
      </GameLayout>
    );
  }

  const handleRecruitHero = () => {
    toast.info("Hero recruitment is coming soon! 🚧");
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
                  <p className="text-white text-2xl font-bold">
                    {heroes.length}
                  </p>
                </div>
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Avg Level</p>
                  <p className="text-white text-2xl font-bold">
                    {heroes.length > 0
                      ? Math.round(
                          heroes.reduce((sum, h) => sum + (h.level || 0), 0) /
                            heroes.length
                        )
                      : 0}
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
                    {heroes.filter((h) => getRarity(h) === "legendary").length}
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
                    {heroes.length > 0
                      ? (
                          heroes.reduce((sum, h) => {
                            const stats = h.stats || h.hero?.baseStats;
                            const atk = stats?.ATK || 0;
                            const spell = stats?.Spell || 0;
                            return sum + atk + spell;
                          }, 0) / 100
                        ).toFixed(1) + "K"
                      : "0K"}
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
                  <option value="unique">Unique</option>
                  <option value="mythic">Mythic</option>
                  <option value="legendary">Legendary</option>
                  <option value="epic">Epic</option>
                  <option value="rare">Rare</option>
                  <option value="uncommon">Uncommon</option>
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
            {filteredHeroes.map((userHero) => (
              <BarrackHeroCard
                key={userHero.id}
                userHero={userHero}
                onClick={handleHeroClick}
                getRarity={getRarity}
                rarityColors={rarityColors}
                getGradientColor={getGradientColor}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredHeroes.length === 0 && (
            <div className="text-center py-16">
              <Shield className="w-16 h-16 text-purple-400/50 mx-auto mb-4" />
              <p className="text-purple-300 text-lg">No heroes found</p>
              <p className="text-purple-400/70 text-sm mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </GameLayout>
  );
};

export default Barracks;
