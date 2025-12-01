import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getAdminFriends } from '../../api/graphql/friend';
import AdminLayout from '../../components/AdminLayout';
import { 
  UserPlus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const ManageFriends = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUserId, setFilterUserId] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      setLoading(true);
      const data = await getAdminFriends();
      setFriends(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredFriends = friends.filter(friend => {
    const matchesSearch = friend.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         friend.friend?.username?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = !filterUserId || friend.userId === parseInt(filterUserId);
    const matchesStatus = filterStatus === 'all' || friend.status === filterStatus;
    return matchesSearch && matchesUser && matchesStatus;
  });

  const handleEdit = (friend) => {
    toast.info(`Editing friendship - Coming soon! 🚧`);
  };

  const handleDelete = (friend) => {
    toast.info(`Delete friendship - Coming soon! 🚧`);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted':
        return 'text-green-400 bg-green-500/20 border-green-500/50';
      case 'pending':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50';
      case 'rejected':
        return 'text-red-400 bg-red-500/20 border-red-500/50';
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
                <UserPlus className="w-8 h-8 text-pink-400" />
                Manage Friends
              </h2>
              <p className="text-gray-400">View and manage all user friendships</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Friendships</p>
              <p className="text-white text-2xl font-bold">{friends.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Accepted</p>
              <p className="text-green-400 text-2xl font-bold">
                {friends.filter(f => f.status?.toLowerCase() === 'accepted').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Pending</p>
              <p className="text-yellow-400 text-2xl font-bold">
                {friends.filter(f => f.status?.toLowerCase() === 'pending').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Rejected</p>
              <p className="text-red-400 text-2xl font-bold">
                {friends.filter(f => f.status?.toLowerCase() === 'rejected').length}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="User ID"
                  value={filterUserId}
                  onChange={(e) => setFilterUserId(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
              >
                <option value="all">All Status</option>
                <option value="accepted">Accepted</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Friend</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredFriends.map((friend) => (
                    <tr key={friend.id} className="hover:bg-slate-900/30 transition">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-semibold">{friend.user?.username || `User #${friend.userId}`}</p>
                          <p className="text-gray-400 text-sm">{friend.user?.email || ''}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-semibold">{friend.friend?.username || `User #${friend.friendId}`}</p>
                          <p className="text-gray-400 text-sm">{friend.friend?.email || ''}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(friend.status)}`}>
                          {friend.status?.toLowerCase() === 'accepted' && <CheckCircle className="w-3 h-3" />}
                          {friend.status?.toLowerCase() === 'pending' && <Clock className="w-3 h-3" />}
                          {friend.status?.toLowerCase() === 'rejected' && <XCircle className="w-3 h-3" />}
                          {friend.status || 'Unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(friend)}
                            className="p-2 hover:bg-blue-500/20 rounded-lg transition cursor-pointer"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4 text-blue-400" />
                          </button>
                          <button
                            onClick={() => handleDelete(friend)}
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

            {filteredFriends.length === 0 && (
              <div className="text-center py-12">
                <UserPlus className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400">No friendships found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageFriends;

