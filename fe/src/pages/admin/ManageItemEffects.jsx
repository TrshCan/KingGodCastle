import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminItemEffects } from '../../api/graphql/itemEffect';
import AdminLayout from '../../components/AdminLayout';
import { 
  Sparkles, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Plus,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const ManageItemEffects = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterItemId, setFilterItemId] = useState('');
  const [itemEffects, setItemEffects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItemEffects();
  }, []);

  const fetchItemEffects = async () => {
    try {
      setLoading(true);
      const data = await getAdminItemEffects();
      setItemEffects(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredItemEffects = itemEffects.filter(effect => {
    const matchesSearch = effect.item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         effect.statName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesItem = !filterItemId || effect.itemId === parseInt(filterItemId);
    return matchesSearch && matchesItem;
  });

  const handleEdit = (effect) => {
    toast.info(`Editing item effect - Coming soon! 🚧`);
  };

  const handleDelete = (effect) => {
    toast.info(`Delete item effect - Coming soon! 🚧`);
  };

  const handleAdd = () => {
    toast.info('Add new item effect - Coming soon! 🚧');
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
                <Sparkles className="w-8 h-8 text-violet-400" />
                Manage Item Effects
              </h2>
              <p className="text-gray-400">Create and manage item effects</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Effect</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Effects</p>
              <p className="text-white text-2xl font-bold">{itemEffects.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Unique Items</p>
              <p className="text-blue-400 text-2xl font-bold">
                {new Set(itemEffects.map(e => e.itemId)).size}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Stat Types</p>
              <p className="text-purple-400 text-2xl font-bold">
                {new Set(itemEffects.map(e => e.statName)).size}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by item or stat name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                placeholder="Filter by Item ID"
                value={filterItemId}
                onChange={(e) => setFilterItemId(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Item</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Stat Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Modifier</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Value</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Note</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredItemEffects.map((effect) => (
                    <tr key={effect.id} className="hover:bg-slate-900/30 transition">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-semibold">{effect.item?.name || `Item #${effect.itemId}`}</p>
                          <p className="text-gray-400 text-sm">{effect.item?.type || ''}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{effect.statName || 'Unknown'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          effect.modifierType?.toLowerCase() === 'add' || effect.modifierType?.toLowerCase() === 'increase'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                            : 'bg-red-500/20 text-red-400 border border-red-500/50'
                        }`}>
                          {effect.modifierType?.toLowerCase() === 'add' || effect.modifierType?.toLowerCase() === 'increase' ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          {effect.modifierType || 'Unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{effect.value || 0}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400 text-sm">{effect.note || '-'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(effect)}
                            className="p-2 hover:bg-blue-500/20 rounded-lg transition cursor-pointer"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4 text-blue-400" />
                          </button>
                          <button
                            onClick={() => handleDelete(effect)}
                            className="p-2 hover:bg-red-500/20 rounded-lg transition cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredItemEffects.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400">No item effects found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageItemEffects;

