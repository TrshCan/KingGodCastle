import { useState, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { getUsers } from '../../api/graphql/user';
import AdminLayout from '../../components/AdminLayout';
import { 
  Users, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
  XCircle,
  MoreVertical,
  UserPlus
} from 'lucide-react';

const ManageUsers = () => {
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      // Transform data to match UI requirements if needed
      const transformedUsers = data.map(user => ({
        ...user,
        status: user.email_verified_at ? 'active' : 'inactive', // Simple logic for status
        heroes: user.userHeroes?.length || 0,
        joinDate: new Date().toLocaleDateString(), // Placeholder as created_at is not in query yet
        lastLogin: 'Unknown' // Placeholder
      }));
      setUsers(transformedUsers);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-500/20 border-green-500/50';
      case 'inactive':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50';
      case 'banned':
        return 'text-red-400 bg-red-500/20 border-red-500/50';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/50';
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    toast.info(`Editing ${user.username} - Coming soon! 🚧`);
  };

  const handleDelete = (user) => {
    toast.info(`Delete ${user.username} - Coming soon! 🚧`);
  };

  const handleBan = (user) => {
    toast.info(`Ban/Unban ${user.username} - Coming soon! 🚧`);
  };

  const handleAddUser = () => {
    toast.info('Add new user - Coming soon! 🚧');
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                Manage Users
              </h2>
              <p className="text-gray-400">View and manage all registered users</p>
            </div>
            <button
              onClick={handleAddUser}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <UserPlus className="w-5 h-5" />
              <span>Add User</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Total Users</p>
              <p className="text-white text-2xl font-bold">{users.length}</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Active</p>
              <p className="text-green-400 text-2xl font-bold">
                {users.filter(u => u.status === 'active').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Inactive</p>
              <p className="text-yellow-400 text-2xl font-bold">
                {users.filter(u => u.status === 'inactive').length}
              </p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">Banned</p>
              <p className="text-red-400 text-2xl font-bold">
                {users.filter(u => u.status === 'banned').length}
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by username or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-3 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition cursor-pointer appearance-none"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="banned">Banned</option>
              </select>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Heroes</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Join Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Last Login</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-900/30 transition">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-semibold">{user.username}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{user.level}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white">{user.heroes}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(user.status)}`}>
                          {user.status === 'active' && <CheckCircle className="w-3 h-3" />}
                          {user.status === 'banned' && <XCircle className="w-3 h-3" />}
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400 text-sm">{user.joinDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400 text-sm">{user.lastLogin}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(user)}
                            className="p-2 hover:bg-blue-500/20 rounded-lg transition cursor-pointer"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4 text-blue-400" />
                          </button>
                          <button
                            onClick={() => handleBan(user)}
                            className="p-2 hover:bg-yellow-500/20 rounded-lg transition cursor-pointer"
                            title="Ban/Unban"
                          >
                            <Ban className="w-4 h-4 text-yellow-400" />
                          </button>
                          <button
                            onClick={() => handleDelete(user)}
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

            {/* No Results */}
            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-400">No users found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageUsers;
