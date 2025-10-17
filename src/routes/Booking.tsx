import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { getFlightById, Flight } from '../data/flights';
import { createBooking } from '../data/bookings';
import { useAuth } from '../services/AuthProvider';

export const Booking = () => {
  const { flightId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [passengerName, setPassengerName] = useState<string>(user?.displayName || '');
  const [numPassengers, setNumPassengers] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const f = getFlightById(flightId || '');
    if (f) setFlight(f);
  }, [flightId]);

  const onCreate = async () => {
    if (!flight) return;
    setSubmitting(true);
    try {
      const booking = createBooking(passengerName, flight as any, numPassengers);
      navigate(`/boarding-pass/${encodeURIComponent(booking.id)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <TopBar />
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
          {!flight && (
            <div className="text-center py-8">
              <div className="text-2xl mb-2">✈️</div>
              <div className="text-gray-600">Loading flight details...</div>
            </div>
          )}
          {flight && (
            <>
              {/* Flight Info Header */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-dark">Complete Your Booking</h2>
                  <div className="text-sm bg-blue-100 text-secondary px-3 py-1 rounded">Tarak Airlines</div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-bold text-lg text-primary">{flight.flightNumber}</div>
                      <div className="text-gray-600 flex items-center space-x-2">
                        <span className="font-medium">{flight.from}</span>
                        <span>→</span>
                        <span className="font-medium">{flight.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-dark">{flight.date}</div>
                      <div className="text-gray-600">{flight.time}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Duration</div>
                      <div className="font-semibold">{flight.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Aircraft</div>
                      <div className="font-semibold">{flight.aircraft}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Stops</div>
                      <div className="font-semibold">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passenger Name *
                    </label>
                    <input
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white/90"
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Passengers *
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={9}
                      value={numPassengers}
                      onChange={(e) => setNumPassengers(parseInt(e.target.value || '1'))}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white/90"
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total Amount:</span>
                    <span className="text-2xl font-bold text-primary">₹{(flight.price * numPassengers).toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    ₹{flight.price.toLocaleString()} × {numPassengers} passenger{numPassengers > 1 ? 's' : ''}
                  </div>
                </div>

                {/* Confirm Button */}
                <div className="pt-4">
                  <button
                    disabled={submitting || !passengerName.trim()}
                    onClick={onCreate}
                    className="w-full bg-primary hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">Processing...</span>
                        <span className="animate-spin">⏳</span>
                      </span>
                    ) : (
                      '✈️ Confirm Booking'
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


