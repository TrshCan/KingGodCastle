import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminUserHeroes } from '../../api/graphql/userHero';
import AdminLayout from '../../components/AdminLayout';
import { 
  Users, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Plus,
  Shield,
  Sword,
  Heart,
  TrendingUp
} from 'lucide-react';

const ManageUserHeroes = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUserId, setFilterUserId] = useState('');
  const [userHeroes, setUserHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserHeroes();
  }, []);

  const fetchUserHeroes = async () => {
    try {
      setLoading(true);
      const data = await getAdminUserHeroes();
      setUserHeroes(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredUserHeroes = userHeroes.filter(uh => {
    const matchesSearch = uh.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uh.hero?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = !filterUserId || uh.userId === parseInt(filterUserId);
    return matchesSearch && matchesUser;
  });

  const handleEdit = (userHero) => {
    toast.info(`Editing user hero - Coming soon! 🚧`);
  };

  const handleDelete = (userHero) => {
    toast.info(`Delete user hero - Coming soon! 🚧`);
  };

  const handleAdd = () => {
    toast.info('Add new user hero - Coming soon! 🚧');
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

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Users className="w-8 h-8 text-cyan-400" />
                Manage User Heroes
              </h2>
              <p className="text-gray-400">View and manage all user-owned heroes</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Hero</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Heroes</p>
              <p className="text-white text-2xl font-bold">{userHeroes.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Unique Users</p>
              <p className="text-blue-400 text-2xl font-bold">
                {new Set(userHeroes.map(uh => uh.userId)).size}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Avg Level</p>
              <p className="text-green-400 text-2xl font-bold">
                {userHeroes.length > 0 
                  ? Math.round(userHeroes.reduce((sum, uh) => sum + (uh.level || 0), 0) / userHeroes.length)
                  : 0}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total XP</p>
              <p className="text-purple-400 text-2xl font-bold">
                {userHeroes.reduce((sum, uh) => sum + (uh.xp || 0), 0).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by user or hero name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                placeholder="Filter by User ID"
                value={filterUserId}
                onChange={(e) => setFilterUserId(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUserHeroes.map((userHero) => (
              <div
                key={userHero.id}
                className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{userHero.hero?.name || `Hero #${userHero.heroId}`}</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-500/20 rounded text-xs text-cyan-300">
                      <TrendingUp className="w-3 h-3" />
                      Lv {userHero.level || 0}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    User: <span className="text-white">{userHero.user?.username || `User #${userHero.userId}`}</span>
                  </p>
                  <p className="text-gray-400 text-sm">
                    Class: <span className="text-white">{userHero.hero?.class || 'Unknown'}</span>
                  </p>
                </div>

                {userHero.stats && (
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-red-400">
                        <Heart className="w-4 h-4" />
                        <span>HP</span>
                      </div>
                      <span className="text-white font-semibold">{userHero.stats.hp || 0}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-orange-400">
                        <Sword className="w-4 h-4" />
                        <span>ATK</span>
                      </div>
                      <span className="text-white font-semibold">{userHero.stats.attack || 0}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Shield className="w-4 h-4" />
                        <span>DEF</span>
                      </div>
                      <span className="text-white font-semibold">{userHero.stats.defense || 0}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEdit(userHero)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(userHero)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredUserHeroes.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No user heroes found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageUserHeroes;

