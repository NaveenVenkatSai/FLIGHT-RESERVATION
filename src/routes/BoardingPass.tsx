import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { QRCodeCanvas } from 'qrcode.react';
import { getBookingById, Booking as BookingType } from '../data/bookings';

type Booking = BookingType;

export const BoardingPass = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const b = getBookingById(bookingId || '');
    if (b) setBooking(b);
  }, [bookingId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-orange-500 to-yellow-500">
      <TopBar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        {!booking && (
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-gray-100">
            <div className="text-2xl mb-2">✈️</div>
            <div className="text-gray-600">Loading boarding pass...</div>
          </div>
        )}
        {booking && (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-red-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">✈️ Tarak Boarding Pass</h1>
                  <p className="text-red-100">Your Journey Begins Here</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-red-100">PNR</div>
                  <div className="text-xl font-mono font-bold">{booking.pnr}</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Flight Details */}
                <div className="md:col-span-2 space-y-6">
                  {/* Passenger Info */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-dark mb-3">Passenger Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Passenger Name</div>
                        <div className="text-lg font-semibold text-dark">{booking.passengerName}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Passengers</div>
                        <div className="text-lg font-semibold text-dark">{booking.numPassengers}</div>
                      </div>
                    </div>
                  </div>

                  {/* Flight Info */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-dark mb-3">Flight Information</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Flight Number</div>
                        <div className="text-lg font-semibold text-primary">{booking.flightNumber}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Seat</div>
                        <div className="text-lg font-semibold text-dark">{booking.seat}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Airline</div>
                        <div className="text-lg font-semibold text-dark">Tarak Airlines</div>
                      </div>
                    </div>
                  </div>

                  {/* Route & Time */}
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-3">Journey Details</h3>
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-lg border border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{booking.from}</div>
                        <div className="text-sm text-gray-600">Origin</div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="border-t-2 border-dashed border-gray-300 flex-1"></div>
                        <div className="mx-4 text-2xl">✈️</div>
                        <div className="border-t-2 border-dashed border-gray-300 flex-1"></div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{booking.to}</div>
                        <div className="text-sm text-gray-600">Destination</div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Departure Date</div>
                        <div className="text-lg font-semibold text-dark">{booking.date}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">Departure Time</div>
                        <div className="text-lg font-semibold text-dark">{booking.time}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white p-4 border-2 border-gray-200 rounded-lg shadow-sm">
                    <QRCodeCanvas 
                      value={JSON.stringify({ id: booking.id, pnr: booking.pnr, flight: booking.flightNumber })} 
                      size={180} 
                      includeMargin 
                      fgColor="#dc2626"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Scan for Check-in</div>
                    <div className="text-xs text-gray-400 mt-1">Mobile Boarding Pass</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <div className="text-sm text-gray-600">
                  <p className="mb-1">Please arrive at the airport at least 2 hours before domestic flights</p>
                  <p>Thank you for choosing Tarak Booking System • Safe travels!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


