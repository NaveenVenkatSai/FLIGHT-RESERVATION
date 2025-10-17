import { useRouteError, Link } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md text-center p-8">
        <div className="text-6xl mb-4">✈️</div>
        <h1 className="text-2xl font-bold text-dark mb-2">Oops! Something went wrong</h1>
        
        {error?.status === 404 ? (
          <>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <div className="space-y-3">
              <Link 
                to="/login" 
                className="block w-full bg-primary hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Go to Login
              </Link>
              <Link 
                to="/search" 
                className="block w-full bg-secondary hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Search Flights
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-4">
              {error?.statusText || error?.message || 'An unexpected error occurred'}
            </p>
            <Link 
              to="/" 
              className="inline-block bg-primary hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Go Home
            </Link>
          </>
        )}
        
        <div className="mt-6 text-xs text-gray-500">
          <p>Tarak Flight Booking System</p>
        </div>
      </div>
    </div>
  );
};