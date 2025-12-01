import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminQuests } from '../../api/graphql/quest';
import AdminLayout from '../../components/AdminLayout';
import { 
  BookOpen, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  Clock
} from 'lucide-react';

const ManageQuests = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuests();
  }, []);

  const fetchQuests = async () => {
    try {
      setLoading(true);
      const data = await getAdminQuests();
      setQuests(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredQuests = quests.filter(quest => {
    const matchesSearch = quest.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quest.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || quest.type === filterType;
    const matchesStatus = filterStatus === 'all' || quest.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleEdit = (quest) => {
    toast.info(`Editing ${quest.title} - Coming soon! 🚧`);
  };

  const handleDelete = (quest) => {
    toast.info(`Delete ${quest.title} - Coming soon! 🚧`);
  };

  const handleAdd = () => {
    toast.info('Add new quest - Coming soon! 🚧');
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'text-green-400 bg-green-500/20 border-green-500/50';
      case 'completed':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/50';
      case 'pending':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/50';
    }
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
                <BookOpen className="w-8 h-8 text-indigo-400" />
                Manage Quests
              </h2>
              <p className="text-gray-400">Create and manage game quests</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Add Quest</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Quests</p>
              <p className="text-white text-2xl font-bold">{quests.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Active</p>
              <p className="text-green-400 text-2xl font-bold">
                {quests.filter(q => q.status?.toLowerCase() === 'active').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Types</p>
              <p className="text-blue-400 text-2xl font-bold">
                {new Set(quests.map(q => q.type)).size}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search quests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
                >
                  <option value="all">All Types</option>
                  {[...new Set(quests.map(q => q.type))].map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuests.map((quest) => (
              <div
                key={quest.id}
                className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{quest.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{quest.description || 'No description'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(quest.status)}`}>
                    {quest.status?.toLowerCase() === 'active' && <CheckCircle className="w-3 h-3" />}
                    {quest.status?.toLowerCase() === 'pending' && <Clock className="w-3 h-3" />}
                    {quest.status || 'Unknown'}
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/50">
                    {quest.type || 'Unknown'}
                  </span>
                </div>

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEdit(quest)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-semibold">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(quest)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-semibold">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredQuests.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No quests found</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageQuests;

