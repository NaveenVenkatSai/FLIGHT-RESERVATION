import { Flight } from './flights';

export type Booking = {
  id: string;
  pnr: string;
  passengerName: string;
  flightNumber: string;
  from: string;
  to: string;
  date: string;
  time: string;
  seat: string;
  numPassengers: number;
};

function generatePNR() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
  return s;
}

function generateSeat() {
  const row = 1 + Math.floor(Math.random() * 40);
  const seat = String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 6));
  return `${row}${seat}`;
}

export function createBooking(passengerName: string, flight: Flight, numPassengers: number): Booking {
  const booking: Booking = {
    id: crypto.randomUUID(),
    pnr: generatePNR(),
    passengerName,
    flightNumber: flight.flightNumber,
    from: flight.from,
    to: flight.to,
    date: flight.date,
    time: flight.time,
    seat: generateSeat(),
    numPassengers
  };
  const list = getBookings();
  list.push(booking);
  localStorage.setItem('bookings', JSON.stringify(list));
  return booking;
}

export function getBookingById(id: string): Booking | undefined {
  return getBookings().find(b => b.id === id);
}

export function getBookings(): Booking[] {
  const raw = localStorage.getItem('bookings');
  return raw ? JSON.parse(raw) : [];
}


