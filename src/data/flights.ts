export type Flight = {
  id: string;
  flightNumber: string;
  from: string;
  to: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  price: number;
  duration: string;
  airline: string;
  aircraft: string;
  stops: number;
};

export type Airport = {
  code: string;
  name: string;
  city: string;
  country: string;
};

export const airports: Airport[] = [
  { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India' },
  { code: 'BOM', name: 'Chhatrapati Shivaji International Airport', city: 'Mumbai', country: 'India' },
  { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bangalore', country: 'India' },
  { code: 'MAA', name: 'Chennai International Airport', city: 'Chennai', country: 'India' },
  { code: 'CCU', name: 'Netaji Subhas Chandra Bose International Airport', city: 'Kolkata', country: 'India' },
  { code: 'HYD', name: 'Rajiv Gandhi International Airport', city: 'Hyderabad', country: 'India' },
  { code: 'AMD', name: 'Sardar Vallabhbhai Patel International Airport', city: 'Ahmedabad', country: 'India' },
  { code: 'PNQ', name: 'Pune Airport', city: 'Pune', country: 'India' },
  { code: 'GOI', name: 'Goa International Airport', city: 'Goa', country: 'India' },
  { code: 'COK', name: 'Cochin International Airport', city: 'Kochi', country: 'India' },
  { code: 'JAI', name: 'Jaipur International Airport', city: 'Jaipur', country: 'India' },
  { code: 'LKO', name: 'Chaudhary Charan Singh International Airport', city: 'Lucknow', country: 'India' },
  { code: 'IXC', name: 'Chandigarh Airport', city: 'Chandigarh', country: 'India' },
  { code: 'NAG', name: 'Dr. Babasaheb Ambedkar International Airport', city: 'Nagpur', country: 'India' },
  { code: 'VNS', name: 'Lal Bahadur Shastri Airport', city: 'Varanasi', country: 'India' }
];

export const flights: Flight[] = [
  // Delhi to Mumbai
  { id: 'f1', flightNumber: 'TK-101', from: 'DEL', to: 'BOM', date: '2025-10-17', time: '06:00', price: 4500, duration: '2h 15m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f2', flightNumber: 'TK-102', from: 'DEL', to: 'BOM', date: '2025-10-17', time: '09:30', price: 5200, duration: '2h 20m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f3', flightNumber: 'TK-103', from: 'DEL', to: 'BOM', date: '2025-10-17', time: '14:15', price: 6800, duration: '2h 10m', airline: 'Tarak Airlines', aircraft: 'Boeing 737 MAX', stops: 0 },
  { id: 'f4', flightNumber: 'TK-104', from: 'DEL', to: 'BOM', date: '2025-10-17', time: '18:45', price: 5900, duration: '2h 25m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },
  { id: 'f5', flightNumber: 'TK-105', from: 'DEL', to: 'BOM', date: '2025-10-17', time: '21:30', price: 4800, duration: '2h 15m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },

  // Mumbai to Delhi
  { id: 'f6', flightNumber: 'TK-201', from: 'BOM', to: 'DEL', date: '2025-10-17', time: '07:15', price: 4600, duration: '2h 20m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f7', flightNumber: 'TK-202', from: 'BOM', to: 'DEL', date: '2025-10-17', time: '12:00', price: 5500, duration: '2h 15m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f8', flightNumber: 'TK-203', from: 'BOM', to: 'DEL', date: '2025-10-17', time: '16:30', price: 6200, duration: '2h 25m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },
  { id: 'f9', flightNumber: 'TK-204', from: 'BOM', to: 'DEL', date: '2025-10-17', time: '20:15', price: 5100, duration: '2h 20m', airline: 'Tarak Airlines', aircraft: 'Boeing 737 MAX', stops: 0 },

  // Delhi to Bangalore
  { id: 'f10', flightNumber: 'TK-301', from: 'DEL', to: 'BLR', date: '2025-10-17', time: '06:30', price: 5800, duration: '2h 45m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f11', flightNumber: 'TK-302', from: 'DEL', to: 'BLR', date: '2025-10-17', time: '11:15', price: 6500, duration: '2h 50m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f12', flightNumber: 'TK-303', from: 'DEL', to: 'BLR', date: '2025-10-17', time: '17:00', price: 7200, duration: '2h 40m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },
  { id: 'f13', flightNumber: 'TK-304', from: 'DEL', to: 'BLR', date: '2025-10-17', time: '22:45', price: 5900, duration: '2h 45m', airline: 'Tarak Airlines', aircraft: 'Boeing 737 MAX', stops: 0 },

  // Bangalore to Delhi
  { id: 'f14', flightNumber: 'TK-401', from: 'BLR', to: 'DEL', date: '2025-10-17', time: '05:45', price: 5700, duration: '2h 50m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f15', flightNumber: 'TK-402', from: 'BLR', to: 'DEL', date: '2025-10-17', time: '10:30', price: 6400, duration: '2h 45m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f16', flightNumber: 'TK-403', from: 'BLR', to: 'DEL', date: '2025-10-17', time: '15:20', price: 7100, duration: '2h 55m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },
  { id: 'f17', flightNumber: 'TK-404', from: 'BLR', to: 'DEL', date: '2025-10-17', time: '19:15', price: 6000, duration: '2h 40m', airline: 'Tarak Airlines', aircraft: 'Boeing 737 MAX', stops: 0 },

  // Mumbai to Bangalore
  { id: 'f18', flightNumber: 'TK-501', from: 'BOM', to: 'BLR', date: '2025-10-17', time: '08:00', price: 4200, duration: '1h 30m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f19', flightNumber: 'TK-502', from: 'BOM', to: 'BLR', date: '2025-10-17', time: '13:45', price: 4800, duration: '1h 25m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f20', flightNumber: 'TK-503', from: 'BOM', to: 'BLR', date: '2025-10-17', time: '18:30', price: 5200, duration: '1h 35m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },

  // Bangalore to Mumbai
  { id: 'f21', flightNumber: 'TK-601', from: 'BLR', to: 'BOM', date: '2025-10-17', time: '07:30', price: 4100, duration: '1h 25m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f22', flightNumber: 'TK-602', from: 'BLR', to: 'BOM', date: '2025-10-17', time: '12:15', price: 4700, duration: '1h 30m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f23', flightNumber: 'TK-603', from: 'BLR', to: 'BOM', date: '2025-10-17', time: '16:45', price: 5100, duration: '1h 35m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },

  // Delhi to Chennai
  { id: 'f24', flightNumber: 'TK-701', from: 'DEL', to: 'MAA', date: '2025-10-17', time: '09:00', price: 6200, duration: '2h 55m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f25', flightNumber: 'TK-702', from: 'DEL', to: 'MAA', date: '2025-10-17', time: '15:30', price: 6800, duration: '3h 00m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f26', flightNumber: 'TK-703', from: 'DEL', to: 'MAA', date: '2025-10-17', time: '21:00', price: 5900, duration: '2h 50m', airline: 'Tarak Airlines', aircraft: 'Boeing 737 MAX', stops: 0 },

  // Chennai to Delhi
  { id: 'f27', flightNumber: 'TK-801', from: 'MAA', to: 'DEL', date: '2025-10-17', time: '06:15', price: 6100, duration: '3h 05m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f28', flightNumber: 'TK-802', from: 'MAA', to: 'DEL', date: '2025-10-17', time: '14:00', price: 6700, duration: '2h 55m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f29', flightNumber: 'TK-803', from: 'MAA', to: 'DEL', date: '2025-10-17', time: '19:45', price: 5800, duration: '3h 00m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },

  // Mumbai to Chennai
  { id: 'f30', flightNumber: 'TK-901', from: 'BOM', to: 'MAA', date: '2025-10-17', time: '10:30', price: 4500, duration: '1h 45m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f31', flightNumber: 'TK-902', from: 'BOM', to: 'MAA', date: '2025-10-17', time: '16:15', price: 5000, duration: '1h 50m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },

  // Chennai to Mumbai
  { id: 'f32', flightNumber: 'TK-1001', from: 'MAA', to: 'BOM', date: '2025-10-17', time: '08:45', price: 4400, duration: '1h 50m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f33', flightNumber: 'TK-1002', from: 'MAA', to: 'BOM', date: '2025-10-17', time: '17:30', price: 4900, duration: '1h 45m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },

  // Bangalore to Chennai
  { id: 'f34', flightNumber: 'TK-1101', from: 'BLR', to: 'MAA', date: '2025-10-17', time: '11:00', price: 3200, duration: '1h 10m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f35', flightNumber: 'TK-1102', from: 'BLR', to: 'MAA', date: '2025-10-17', time: '18:00', price: 3600, duration: '1h 15m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },

  // Chennai to Bangalore
  { id: 'f36', flightNumber: 'TK-1201', from: 'MAA', to: 'BLR', date: '2025-10-17', time: '09:15', price: 3100, duration: '1h 15m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f37', flightNumber: 'TK-1202', from: 'MAA', to: 'BLR', date: '2025-10-17', time: '20:30', price: 3500, duration: '1h 10m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },

  // Delhi to Kolkata
  { id: 'f38', flightNumber: 'TK-1301', from: 'DEL', to: 'CCU', date: '2025-10-17', time: '07:45', price: 5500, duration: '2h 30m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f39', flightNumber: 'TK-1302', from: 'DEL', to: 'CCU', date: '2025-10-17', time: '13:20', price: 6100, duration: '2h 25m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f40', flightNumber: 'TK-1303', from: 'DEL', to: 'CCU', date: '2025-10-17', time: '19:00', price: 5800, duration: '2h 35m', airline: 'Tarak Airlines', aircraft: 'Boeing 737 MAX', stops: 0 },

  // Kolkata to Delhi
  { id: 'f41', flightNumber: 'TK-1401', from: 'CCU', to: 'DEL', date: '2025-10-17', time: '06:30', price: 5400, duration: '2h 35m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f42', flightNumber: 'TK-1402', from: 'CCU', to: 'DEL', date: '2025-10-17', time: '12:45', price: 6000, duration: '2h 30m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f43', flightNumber: 'TK-1403', from: 'CCU', to: 'DEL', date: '2025-10-17', time: '18:15', price: 5700, duration: '2h 40m', airline: 'Tarak Airlines', aircraft: 'Airbus A321', stops: 0 },

  // Mumbai to Hyderabad
  { id: 'f44', flightNumber: 'TK-1501', from: 'BOM', to: 'HYD', date: '2025-10-17', time: '08:30', price: 3800, duration: '1h 20m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f45', flightNumber: 'TK-1502', from: 'BOM', to: 'HYD', date: '2025-10-17', time: '14:45', price: 4200, duration: '1h 25m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },

  // Hyderabad to Mumbai
  { id: 'f46', flightNumber: 'TK-1601', from: 'HYD', to: 'BOM', date: '2025-10-17', time: '10:15', price: 3700, duration: '1h 25m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f47', flightNumber: 'TK-1602', from: 'HYD', to: 'BOM', date: '2025-10-17', time: '16:30', price: 4100, duration: '1h 20m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },

  // Delhi to Goa
  { id: 'f48', flightNumber: 'TK-1701', from: 'DEL', to: 'GOI', date: '2025-10-17', time: '11:30', price: 7200, duration: '2h 40m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 },
  { id: 'f49', flightNumber: 'TK-1702', from: 'DEL', to: 'GOI', date: '2025-10-17', time: '17:45', price: 7800, duration: '2h 35m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },

  // Goa to Delhi
  { id: 'f50', flightNumber: 'TK-1801', from: 'GOI', to: 'DEL', date: '2025-10-17', time: '09:00', price: 7100, duration: '2h 45m', airline: 'Tarak Airlines', aircraft: 'Boeing 737', stops: 0 },
  { id: 'f51', flightNumber: 'TK-1802', from: 'GOI', to: 'DEL', date: '2025-10-17', time: '15:15', price: 7700, duration: '2h 40m', airline: 'Tarak Airlines', aircraft: 'Airbus A320', stops: 0 }
];

export function searchFlights(from: string, to: string, date: string, sortBy?: 'price' | 'time' | 'duration'): Flight[] {
  let results = flights.filter(f => 
    f.from.toUpperCase() === from.toUpperCase() && 
    f.to.toUpperCase() === to.toUpperCase() && 
    f.date === date
  );

  // Sort results
  if (sortBy === 'price') {
    results.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'time') {
    results.sort((a, b) => a.time.localeCompare(b.time));
  } else if (sortBy === 'duration') {
    results.sort((a, b) => {
      const aDuration = parseDuration(a.duration);
      const bDuration = parseDuration(b.duration);
      return aDuration - bDuration;
    });
  }

  return results;
}

export function getFlightById(id: string): Flight | undefined {
  return flights.find(f => f.id === id);
}

export function getAirportByCode(code: string): Airport | undefined {
  return airports.find(a => a.code === code);
}

export function getPopularRoutes(): { from: string; to: string; count: number }[] {
  const routeCounts: { [key: string]: number } = {};
  
  flights.forEach(flight => {
    const route = `${flight.from}-${flight.to}`;
    routeCounts[route] = (routeCounts[route] || 0) + 1;
  });

  return Object.entries(routeCounts)
    .map(([route, count]) => {
      const [from, to] = route.split('-');
      return { from, to, count };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

export function getFlightsByRoute(from: string, to: string): Flight[] {
  return flights.filter(f => 
    f.from.toUpperCase() === from.toUpperCase() && 
    f.to.toUpperCase() === to.toUpperCase()
  );
}

export function getUniqueAirports(): Airport[] {
  const usedCodes = new Set(flights.flatMap(f => [f.from, f.to]));
  return airports.filter(a => usedCodes.has(a.code));
}

function parseDuration(duration: string): number {
  const match = duration.match(/(\d+)h\s*(\d+)m/);
  if (match) {
    return parseInt(match[1]) * 60 + parseInt(match[2]);
  }
  return 0;
}


