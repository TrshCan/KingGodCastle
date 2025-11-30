import GameLayout from '../components/GameLayout';
import { Sword, MapPin } from 'lucide-react';

const Quest = () => {
  return (
    <GameLayout>
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Sword className="w-12 h-12 text-red-400" />
              Quest
            </h2>
            <p className="text-purple-300 text-xl">
              Embark on epic adventures
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl p-12 border border-white/10 text-center">
            <MapPin className="w-24 h-24 text-red-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Quest System</h3>
            <p className="text-purple-200 text-lg">
              Quest content will be implemented here
            </p>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default Quest;
