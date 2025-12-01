import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminRegions } from '../../api/graphql/region';
import AdminLayout from '../../components/AdminLayout';
import { 
  MapPin, 
  Search, 
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const ManageRegions = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    try {
      setLoading(true);
      const data = await getAdminRegions();
      setRegions(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredRegions = regions.filter(region => {
    return region.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
           region.description?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleEdit = (region) => {
    toast.info(`Editing ${region.name} - Coming soon! 🚧`);
  };

  const handleDelete = (region) => {
    toast.info(`Delete ${region.name} - Coming soon! 🚧`);
  };

  const handleAdd = () => {
    toast.info('Add new region - Coming soon! 🚧');
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
                <MapPin className="w-8 h-8 text-emerald-400" />
                Manage Regions
              </h2>
              <p className="text-gray-400">Create and manage game regions</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Region</span>
            </button>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10 mb-6">
            <p className="text-gray-400 text-sm mb-1">Total Regions</p>
            <p className="text-white text-2xl font-bold">{regions.length}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search regions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRegions.map((region) => (
              <div
                key={region.id}
                className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {region.icon && (
                        <span className="text-3xl">{region.icon}</span>
                      )}
                      <h3 className="text-xl font-bold text-white">{region.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{region.description || 'No description'}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEdit(region)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(region)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredRegions.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No regions found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageRegions;

