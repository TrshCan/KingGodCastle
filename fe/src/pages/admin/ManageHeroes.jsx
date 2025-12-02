import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getHeroes, getRegions, getHeroClasses, createHero, updateHero, deleteHero, getHero } from '../../api/graphql/hero';
import AdminLayout from '../../components/AdminLayout';
import AdminHeroCard from '../../components/AdminHeroCard';
import HeroForm from '../../components/HeroForm';
import HeroDetail from '../../components/HeroDetail';
import { 
  Shield, 
  Search, 
  Filter,
  Plus
} from 'lucide-react';

const ManageHeroes = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRarity, setFilterRarity] = useState('all');
  const [filterClass, setFilterClass] = useState('all');
  const [heroes, setHeroes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [heroClasses, setHeroClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchHeroes();
    fetchRegions();
    fetchHeroClasses();
  }, []);

  const fetchHeroes = async () => {
    try {
      setLoading(true);
      const data = await getHeroes();
      setHeroes(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegions = async () => {
    try {
      const data = await getRegions();
      console.log('Fetched regions:', data);
      if (Array.isArray(data)) {
        setRegions(data);
      } else {
        console.error('Regions data is not an array:', data);
        setRegions([]);
      }
    } catch (error) {
      console.error('Failed to fetch regions:', error);
      toast.error(`Failed to load regions: ${error.message}`);
      setRegions([]);
    }
  };

  const fetchHeroClasses = async () => {
    try {
      const data = await getHeroClasses();
      console.log('Fetched hero classes:', data);
      if (Array.isArray(data)) {
        setHeroClasses(data);
      } else {
        console.error('Hero classes data is not an array:', data);
        setHeroClasses([]);
      }
    } catch (error) {
      console.error('Failed to fetch hero classes:', error);
      toast.error(`Failed to load hero classes: ${error.message}`);
      setHeroClasses([]);
    }
  };

  // Get rarity from database, fallback to calculated if not available
  const getRarity = (hero) => {
    if (hero.rarity) return hero.rarity;
    // Fallback calculation based on HP
    const hp = hero.baseStats?.HP || 0;
    if (hp >= 2500) return 'legendary';
    if (hp >= 2000) return 'epic';
    if (hp >= 1500) return 'rare';
    return 'common';
  };

  const rarityColors = {
    unique: 'text-pink-400 bg-pink-500/20 border-pink-500/50',
    mythic: 'text-red-400 bg-red-500/20 border-red-500/50',
    legendary: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50',
    epic: 'text-purple-400 bg-purple-500/20 border-purple-500/50',
    rare: 'text-blue-400 bg-blue-500/20 border-blue-500/50',
    uncommon: 'text-green-400 bg-green-500/20 border-green-500/50',
    common: 'text-gray-400 bg-gray-500/20 border-gray-500/50'
  };

  const filteredHeroes = heroes.filter(hero => {
    const heroClass = hero.heroClass?.name || '';
    const matchesSearch = hero.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         heroClass.toLowerCase().includes(searchTerm.toLowerCase());
    const rarity = getRarity(hero);
    const matchesRarity = filterRarity === 'all' || rarity === filterRarity;
    const matchesClass = filterClass === 'all' || heroClass === filterClass;
    return matchesSearch && matchesRarity && matchesClass;
  });

  // Get unique classes from heroes
  const uniqueClasses = [...new Set(heroes.map(h => h.heroClass?.name).filter(Boolean))];

  const handleEdit = async (hero) => {
    try {
      // Ensure regions and classes are loaded before opening form
      if (regions.length === 0) {
        await fetchRegions();
      }
      if (heroClasses.length === 0) {
        await fetchHeroClasses();
      }
      // Fetch full hero details for editing
      const fullHero = await getHero(hero.id);
      setSelectedHero(fullHero);
      setShowForm(true);
    } catch (error) {
      toast.error(`Failed to load hero details: ${error.message}`);
    }
  };

  const handleDelete = async (hero) => {
    if (!window.confirm(`Are you sure you want to delete ${hero.name}? This action cannot be undone.`)) {
      return;
    }

    try {
      await deleteHero(hero.id);
      toast.success(`${hero.name} deleted successfully`);
      fetchHeroes();
    } catch (error) {
      toast.error(`Failed to delete hero: ${error.message}`);
    }
  };

  const handleAddHero = async () => {
    // Ensure regions and classes are loaded before opening form
    if (regions.length === 0) {
      await fetchRegions();
    }
    if (heroClasses.length === 0) {
      await fetchHeroClasses();
    }
    setSelectedHero(null);
    setShowForm(true);
  };

  const handleViewDetail = async (hero) => {
    try {
      const fullHero = await getHero(hero.id);
      setSelectedHero(fullHero);
      setShowDetail(true);
    } catch (error) {
      toast.error(`Failed to load hero details: ${error.message}`);
    }
  };

  const handleSaveHero = async (formData) => {
    try {
      setIsSubmitting(true);
      
      // Transform form data to match API format
      const input = {
        name: formData.name,
        regionId: parseInt(formData.regionId),
        classId: parseInt(formData.classId),
        title: formData.title || null,
        description: formData.description || null,
        rarity: formData.rarity || 'common',
        icon: formData.icon || null,
        illustration: formData.illustration || null,
        card: formData.card || null,
      };

      if (selectedHero) {
        // Update existing hero
        await updateHero(selectedHero.id, input);
        toast.success(`${input.name} updated successfully`);
      } else {
        // Create new hero
        await createHero(input);
        toast.success(`${input.name} created successfully`);
      }

      setShowForm(false);
      setSelectedHero(null);
      fetchHeroes();
    } catch (error) {
      toast.error(`Failed to save hero: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedHero(null);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedHero(null);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-6 flex items-center justify-center min-h-screen">
          <div className="text-white">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  // Calculate stats
  const legendaryCount = heroes.filter(h => getRarity(h) === 'legendary').length;
  const epicCount = heroes.filter(h => getRarity(h) === 'epic').length;
  const totalUsers = heroes.reduce((sum, h) => sum + (h.userHeroes?.length || 0), 0);

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
                {legendaryCount}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Epic</p>
              <p className="text-purple-400 text-2xl font-bold">
                {epicCount}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Users</p>
              <p className="text-blue-400 text-2xl font-bold">
                {totalUsers.toLocaleString()}
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
                  <option value="unique">Unique</option>
                  <option value="mythic">Mythic</option>
                  <option value="legendary">Legendary</option>
                  <option value="epic">Epic</option>
                  <option value="rare">Rare</option>
                  <option value="uncommon">Uncommon</option>
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
                  {uniqueClasses.map(className => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Heroes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHeroes.map((hero) => (
              <AdminHeroCard
                key={hero.id}
                hero={hero}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleViewDetail}
                rarityColors={rarityColors}
              />
            ))}
          </div>

          {/* Hero Form Modal */}
          {showForm && (
            <HeroForm
              hero={selectedHero}
              regions={regions}
              heroClasses={heroClasses}
              onSave={handleSaveHero}
              onCancel={handleCloseForm}
              isLoading={isSubmitting}
            />
          )}

          {/* Hero Detail Modal */}
          {showDetail && selectedHero && (
            <HeroDetail
              hero={selectedHero}
              onClose={handleCloseDetail}
            />
          )}

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
