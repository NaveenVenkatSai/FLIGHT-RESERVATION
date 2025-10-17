import { Link } from 'react-router-dom';
import { useAuth } from '../services/AuthProvider';

export const TopBar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/search" className="flex items-center space-x-2">
          <span className="text-2xl">✈️</span>
          <span className="font-bold text-white text-xl">Tarak</span>
          <span className="text-white text-sm hidden sm:block">Flight Booking</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <span className="text-white text-sm">
                Welcome, <span className="font-semibold text-yellow-300">{user.displayName}</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm backdrop-blur-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


