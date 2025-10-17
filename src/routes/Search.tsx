import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { Flight, searchFlights as searchLocal, getUniqueAirports, getAirportByCode, getPopularRoutes } from '../data/flights';

export const Search = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('DEL');
  const [to, setTo] = useState('BOM');
  const [date, setDate] = useState<string>('2025-10-17');
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [sortBy, setSortBy] = useState<'price' | 'time' | 'duration'>('price');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  
  const airports = getUniqueAirports();
  const popularRoutes = getPopularRoutes();

  const searchFlights = async () => {
    setLoading(true);
    const data = searchLocal(from, to, date, sortBy);
    setFlights(data);
    setLoading(false);
  };

  useEffect(() => { 
    searchFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowFromDropdown(false);
      setShowToDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleFromSelect = (airportCode: string) => {
    setFrom(airportCode);
    setShowFromDropdown(false);
  };

  const handleToSelect = (airportCode: string) => {
    setTo(airportCode);
    setShowToDropdown(false);
  };

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const selectPopularRoute = (routeFrom: string, routeTo: string) => {
    setFrom(routeFrom);
    setTo(routeTo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-red-500">
      <TopBar />
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Find Your Perfect Flight</h1>
          <p className="text-white/90 text-lg">Search and book flights with Tarak Booking System</p>
        </div>

        {/* Popular Routes */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-3">Popular Routes</h3>
          <div className="flex flex-wrap gap-2">
            {popularRoutes.map((route, index) => (
              <button
                key={index}
                onClick={() => selectPopularRoute(route.from, route.to)}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm transition-colors backdrop-blur-sm"
              >
                {route.from} → {route.to}
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-6 border border-gray-100">
          <div className="grid md:grid-cols-6 gap-4">
            {/* From Dropdown */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
              <div className="relative">
                <button
                  onClick={() => setShowFromDropdown(!showFromDropdown)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-left focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold">{from}</div>
                    <div className="text-xs text-gray-500">{getAirportByCode(from)?.city}</div>
                  </div>
                  <span className="text-gray-400">▼</span>
                </button>
                {showFromDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {airports.map((airport) => (
                      <button
                        key={airport.code}
                        onClick={() => handleFromSelect(airport.code)}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-semibold">{airport.code}</div>
                        <div className="text-sm text-gray-600">{airport.city}</div>
                        <div className="text-xs text-gray-400">{airport.name}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex items-end">
              <button
                onClick={swapAirports}
                className="w-full h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                title="Swap airports"
              >
                ⇄
              </button>
            </div>

            {/* To Dropdown */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
              <div className="relative">
                <button
                  onClick={() => setShowToDropdown(!showToDropdown)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-left focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold">{to}</div>
                    <div className="text-xs text-gray-500">{getAirportByCode(to)?.city}</div>
                  </div>
                  <span className="text-gray-400">▼</span>
                </button>
                {showToDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {airports.map((airport) => (
                      <button
                        key={airport.code}
                        onClick={() => handleToSelect(airport.code)}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-semibold">{airport.code}</div>
                        <div className="text-sm text-gray-600">{airport.city}</div>
                        <div className="text-xs text-gray-400">{airport.name}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Departure Date</label>
              <input 
                type="date" 
                value={date} 
                onChange={(e)=>setDate(e.target.value)} 
                min={new Date().toISOString().slice(0,10)}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white" 
              />
            </div>

            {/* Sort By */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'time' | 'duration')}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
              >
                <option value="price">Price</option>
                <option value="time">Departure Time</option>
                <option value="duration">Duration</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button 
                onClick={searchFlights} 
                className="w-full bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              >
                🔍 Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        {!loading && flights.length > 0 && (
          <div className="mb-4 text-white">
            <h3 className="text-lg font-semibold">
              {flights.length} flight{flights.length !== 1 ? 's' : ''} found from {getAirportByCode(from)?.city} to {getAirportByCode(to)?.city}
            </h3>
            <p className="text-white/80 text-sm">Sorted by {sortBy}</p>
          </div>
        )}

        {/* Results */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {loading && (
            <div className="p-8 text-center">
              <div className="text-2xl mb-2 animate-bounce">✈️</div>
              <div className="text-gray-600">Searching flights...</div>
            </div>
          )}
          {!loading && flights.length === 0 && (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4 text-gray-400">🔍</div>
              <div className="text-gray-600 mb-4">No flights found for your search criteria.</div>
              <div className="text-sm text-gray-500">
                Try searching for a different date or route from our popular destinations above.
              </div>
            </div>
          )}
          {!loading && flights.map((f, index) => (
            <div key={f.id} className={`p-6 hover:bg-white/80 transition-colors ${index !== flights.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  {/* Flight Header */}
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="font-bold text-xl text-primary">{f.flightNumber}</div>
                    <div className="text-sm bg-blue-100 text-secondary px-3 py-1 rounded-full">{f.airline}</div>
                    <div className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                      {f.stops === 0 ? 'Non-stop' : `${f.stops} stop${f.stops > 1 ? 's' : ''}`}
                    </div>
                  </div>

                  {/* Route and Time */}
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <div className="text-2xl font-bold text-dark">{f.time}</div>
                      <div className="text-sm text-gray-600">{f.from}</div>
                      <div className="text-xs text-gray-500">{getAirportByCode(f.from)?.city}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">{f.duration}</div>
                      <div className="border-t-2 border-dashed border-gray-300 relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-gray-400">✈️</div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{f.aircraft}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">
                        {(() => {
                          const [hours, minutes] = f.time.split(':').map(Number);
                          const durationMatch = f.duration.match(/(\d+)h\s*(\d+)m/);
                          if (durationMatch) {
                            const durationHours = parseInt(durationMatch[1]);
                            const durationMinutes = parseInt(durationMatch[2]);
                            const arrivalMinutes = hours * 60 + minutes + durationHours * 60 + durationMinutes;
                            const arrivalHours = Math.floor(arrivalMinutes / 60) % 24;
                            const arrivalMins = arrivalMinutes % 60;
                            return `${arrivalHours.toString().padStart(2, '0')}:${arrivalMins.toString().padStart(2, '0')}`;
                          }
                          return '--:--';
                        })()}
                      </div>
                      <div className="text-sm text-gray-600">{f.to}</div>
                      <div className="text-xs text-gray-500">{getAirportByCode(f.to)?.city}</div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="text-xs text-gray-500">
                    Flight Date: {new Date(f.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                {/* Price and Book */}
                <div className="ml-6 text-right">
                  <div className="text-3xl font-bold text-primary mb-1">₹{f.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 mb-4">per person</div>
                  <button 
                    onClick={() => navigate(`/booking/${encodeURIComponent(f.id)}`)} 
                    className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg w-full"
                  >
                    Book Now
                  </button>
                  <div className="text-xs text-gray-500 mt-2">Includes taxes & fees</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


