import AdminLayout from '../../components/AdminLayout';
import { 
  Users, 
  Shield, 
  TrendingUp, 
  Activity,
  UserPlus,
  UserMinus,
  Crown,
  DollarSign
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Total Users',
      value: '12,458',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Active Heroes',
      value: '8,234',
      change: '+8.2%',
      trend: 'up',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      title: 'New Signups',
      value: '342',
      change: '+23.1%',
      trend: 'up',
      icon: UserPlus,
      color: 'from-purple-600 to-pink-600',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-yellow-600 to-orange-600',
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400'
    }
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created new hero', time: '2 minutes ago', type: 'create' },
    { id: 2, user: 'Jane Smith', action: 'Updated user profile', time: '15 minutes ago', type: 'update' },
    { id: 3, user: 'Mike Johnson', action: 'Deleted hero', time: '1 hour ago', type: 'delete' },
    { id: 4, user: 'Sarah Williams', action: 'Registered new account', time: '2 hours ago', type: 'create' },
    { id: 5, user: 'Tom Brown', action: 'Updated hero stats', time: '3 hours ago', type: 'update' }
  ];

  const topHeroes = [
    { id: 1, name: 'Sir Galahad', class: 'Knight', users: 1234, avatar: '⚔️' },
    { id: 2, name: 'Aria Moonwhisper', class: 'Mage', users: 1156, avatar: '🔮' },
    { id: 3, name: 'Thorgrim Ironbeard', class: 'Warrior', users: 1089, avatar: '🪓' },
    { id: 4, name: 'Luna Shadowstep', class: 'Assassin', users: 987, avatar: '🗡️' },
    { id: 5, name: 'Elara Lightbringer', class: 'Cleric', users: 876, avatar: '✨' }
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
            <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                <p className="text-white text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-400" />
                  Recent Activities
                </h3>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'create' ? 'bg-green-400' :
                      activity.type === 'update' ? 'bg-blue-400' :
                      'bg-red-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Heroes */}
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  Top Heroes
                </h3>
              </div>
              <div className="space-y-3">
                {topHeroes.map((hero, index) => (
                  <div
                    key={hero.id}
                    className="flex items-center gap-4 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-600/20 rounded-full text-purple-400 font-bold text-sm">
                      #{index + 1}
                    </div>
                    <div className="text-2xl">{hero.avatar}</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{hero.name}</p>
                      <p className="text-gray-400 text-xs">{hero.class}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm">{hero.users}</p>
                      <p className="text-gray-400 text-xs">users</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
