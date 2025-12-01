import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminInventories } from '../../api/graphql/inventory';
import AdminLayout from '../../components/AdminLayout';
import { 
  Package, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Plus,
  User,
  ShoppingBag
} from 'lucide-react';

const ManageInventories = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUserId, setFilterUserId] = useState('');
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = async () => {
    try {
      setLoading(true);
      const data = await getAdminInventories();
      setInventories(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredInventories = inventories.filter(inv => {
    const matchesSearch = inv.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inv.item?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = !filterUserId || inv.userId === parseInt(filterUserId);
    return matchesSearch && matchesUser;
  });

  const handleEdit = (inventory) => {
    toast.info(`Editing inventory - Coming soon! 🚧`);
  };

  const handleDelete = (inventory) => {
    toast.info(`Delete inventory - Coming soon! 🚧`);
  };

  const handleAdd = () => {
    toast.info('Add new inventory item - Coming soon! 🚧');
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
                <Package className="w-8 h-8 text-orange-400" />
                Manage Inventories
              </h2>
              <p className="text-gray-400">View and manage all user inventories</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Item</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Items</p>
              <p className="text-white text-2xl font-bold">{inventories.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Unique Users</p>
              <p className="text-blue-400 text-2xl font-bold">
                {new Set(inventories.map(i => i.userId)).size}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Quantity</p>
              <p className="text-green-400 text-2xl font-bold">
                {inventories.reduce((sum, i) => sum + (i.quantity || 0), 0)}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by user or item name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                placeholder="Filter by User ID"
                value={filterUserId}
                onChange={(e) => setFilterUserId(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Item</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Quantity</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredInventories.map((inventory) => (
                    <tr key={inventory.id} className="hover:bg-slate-900/30 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-white font-semibold">{inventory.user?.username || `User #${inventory.userId}`}</p>
                            <p className="text-gray-400 text-sm">{inventory.user?.email || ''}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4 text-orange-400" />
                          <div>
                            <p className="text-white font-semibold">{inventory.item?.name || `Item #${inventory.itemId}`}</p>
                            <p className="text-gray-400 text-sm">{inventory.item?.type || ''}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{inventory.quantity || 0}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(inventory)}
                            className="p-2 hover:bg-blue-500/20 rounded-lg transition cursor-pointer"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4 text-blue-400" />
                          </button>
                          <button
                            onClick={() => handleDelete(inventory)}
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

            {filteredInventories.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400">No inventories found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageInventories;

