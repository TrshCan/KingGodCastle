import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminItems } from '../../api/graphql/sundry';
import AdminLayout from '../../components/AdminLayout';
import { 
  ShoppingBag, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Plus,
  Sparkles
} from 'lucide-react';

const ManageItems = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getAdminItems();
      setItems(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleEdit = (item) => {
    toast.info(`Editing ${item.name} - Coming soon! 🚧`);
  };

  const handleDelete = (item) => {
    toast.info(`Delete ${item.name} - Coming soon! 🚧`);
  };

  const handleAdd = () => {
    toast.info('Add new item - Coming soon! 🚧');
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
                <ShoppingBag className="w-8 h-8 text-amber-400" />
                Manage Items
              </h2>
              <p className="text-gray-400">Create and manage game items</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Item</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Items</p>
              <p className="text-white text-2xl font-bold">{items.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Types</p>
              <p className="text-blue-400 text-2xl font-bold">
                {new Set(items.map(i => i.type)).size}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">With Effects</p>
              <p className="text-purple-400 text-2xl font-bold">
                {items.filter(i => i.itemEffects?.length > 0).length}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
              >
                <option value="all">All Types</option>
                {[...new Set(items.map(i => i.type))].map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon && (
                        <span className="text-3xl">{item.icon}</span>
                      )}
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{item.description || 'No description'}</p>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/20 rounded-full text-xs text-amber-300 border border-amber-500/50">
                      {item.type || 'Unknown'}
                    </span>
                  </div>
                </div>

                {item.itemEffects && item.itemEffects.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-400">Effects:</span>
                    </div>
                    <div className="space-y-1">
                      {item.itemEffects.slice(0, 3).map((effect, idx) => (
                        <div key={idx} className="text-xs text-gray-300">
                          {effect.statName}: {effect.modifierType} {effect.value}
                        </div>
                      ))}
                      {item.itemEffects.length > 3 && (
                        <div className="text-xs text-gray-500">+{item.itemEffects.length - 3} more</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No items found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageItems;

