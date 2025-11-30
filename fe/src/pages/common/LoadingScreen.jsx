import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/ToastContext';
import loadingMessagesJson from '../../assets/json/messages.json';
import bgVideo from '../../assets/videos/loading.gif';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [tip, setTip] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If not logged in, redirect to login
      toast.warning('Please login to play');
      navigate('/login');
    }
  }, [navigate, toast]);

  useEffect(() => {
    if (!user) return;

    const { loadingMessages, tipsAndTricks } = loadingMessagesJson;
    const shuffledMessages = [...loadingMessages].sort(() => 0.5 - Math.random());
    const randomTip = tipsAndTricks[Math.floor(Math.random() * tipsAndTricks.length)];
    
    let msgIndex = 0;
    setMessage(shuffledMessages[msgIndex]);
    setTip(randomTip);

    const messageInterval = setInterval(() => {
      msgIndex++;
      if (msgIndex < shuffledMessages.length) {
        setMessage(shuffledMessages[msgIndex]);
      }
    }, Math.floor(Math.random() * 2000) + 1000);

    // Simulate loading
    const duration = Math.floor(Math.random() * 5) + 8; // 8-13 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(messageInterval);
          // Auto navigate to main hall when loading completes
          setTimeout(() => {
            toast.success('Welcome to the Main Hall!');
            navigate('/mainhall');
          }, 500);
          return 100;
        }
        return prev + 100 / (duration * 10);
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [user, navigate, toast]);

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <img 
        src={bgVideo} 
        alt="Loading Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* User info in top right */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
        {user.avatar ? (
          <img 
            src={user.avatar} 
            alt={user.username}
            className="w-8 h-8 rounded-full border-2 border-purple-400"
          />
        ) : (
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">{user.username[0].toUpperCase()}</span>
          </div>
        )}
        <span className="text-white font-medium">{user.username}</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-3xl px-4">
        {/* Game title */}
        <div className="mb-16">
          <h1 className="text-7xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
            KING GOD
            <span className="block text-6xl bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              CASTLE
            </span>
          </h1>
        </div>

        <div className="space-y-8">
            {/* Loading spinner */}
            <div className="flex justify-center">
              <Loader2 className="w-20 h-20 text-purple-400 animate-spin drop-shadow-lg" />
            </div>

            {/* Progress bar - Fixed width */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative h-8 bg-black/50 rounded-full overflow-hidden border-2 border-purple-500/50 backdrop-blur-sm">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg drop-shadow-lg">
                    {Math.floor(progress)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Loading message - Fixed height */}
            <div className="h-16 flex items-center justify-center">
              <p className="text-white text-xl font-medium drop-shadow-lg">
                {message}
              </p>
            </div>

            {/* Tip - Fixed container */}
            <div className="mt-12 mx-auto max-w-2xl">
              <div className="p-6 bg-black/60 backdrop-blur-md rounded-xl border border-purple-500/30 shadow-2xl">
                <p className="text-purple-200 text-base leading-relaxed">
                  <span className="font-bold text-yellow-400 text-lg">💡 Tip:</span> {tip}
                </p>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default LoadingScreen;
