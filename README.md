# Tarak Flight Booking System

A modern, client-side flight booking application built with React, TypeScript, and Tailwind CSS. No backend required - all data is stored locally using localStorage.

## 🚀 Features

- **Advanced Flight Search**: Search 50+ flights across 15 major airports
- **Smart Dropdowns**: Airport selection with city names and full details
- **Popular Routes**: Quick-select buttons for common destinations
- **Multiple Sort Options**: Sort by price, time, or duration
- **Detailed Flight Info**: Duration, aircraft type, stops, and more
- **Booking System**: Complete booking flow with passenger details
- **Digital Boarding Pass**: Generate boarding passes with QR codes
- **Local Storage**: All bookings persist across browser sessions
- **Responsive Design**: Works perfectly on desktop and mobile

## 🛫 Flight Network

**15 Major Airports**: DEL, BOM, BLR, MAA, CCU, HYD, AMD, PNQ, GOI, COK, JAI, LKO, IXC, NAG, VNS

**50+ Daily Flights** across popular routes with comprehensive details including:
- Flight duration and aircraft type
- Non-stop and connecting flights
- Real-time arrival calculations
- Competitive pricing

## 🔧 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom gradients
- **Routing**: React Router DOM with error boundaries
- **QR Codes**: qrcode.react
- **Data Storage**: localStorage (client-side)
- **Authentication**: Simple demo login system

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── TopBar.tsx
│   │   └── ErrorBoundary.tsx
│   ├── data/          # Flight data and utilities
│   │   ├── flights.ts  # 50+ flights & airport data
│   │   └── bookings.ts # Booking management
│   ├── routes/        # Page components
│   │   ├── Login.tsx   # Authentication
│   │   ├── Search.tsx  # Flight search
│   │   ├── Booking.tsx # Booking flow
│   │   └── BoardingPass.tsx # Digital boarding pass
│   ├── services/      # Auth and utility services
│   │   ├── AuthProvider.tsx
│   │   └── ProtectedRoute.tsx
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
├── netlify.toml       # Netlify deployment config
├── vercel.json        # Vercel deployment config
└── deploy.md          # Deployment guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation & Development

1. **Clone and install**:
```bash
git clone <repository-url>
cd tarak-flight-booking
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Open browser**: `http://localhost:5173`

### Production Build

```bash
npm run build      # Build for production
npm run preview    # Preview production build
npm run deploy     # Build and preview
```

## 🔐 Demo Login

- **Username**: `tarak`
- **Password**: `tarak`

## 🌐 Deployment

This is a static React application ready for deployment:

### Netlify (Recommended)
```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the `dist` folder to Vercel
```

### GitHub Pages
```bash
npm run build
# Upload `dist` folder contents to GitHub Pages
```

### Any Static Host
The `dist` folder contains all static files needed for deployment.

## 📱 Usage

1. **Login**: Use demo credentials (tarak/tarak)
2. **Search**: Select airports from dropdowns or use popular routes
3. **Sort**: Choose sorting by price, time, or duration
4. **Book**: Select flight and enter passenger details
5. **Boarding Pass**: Get digital boarding pass with QR code

## 🎨 Design Features

- **Vibrant Gradients**: Beautiful gradient backgrounds throughout
- **Glass Morphism**: Modern frosted glass effects
- **Professional UI**: Clean, airline-inspired design
- **Responsive Layout**: Perfect on all screen sizes
- **Smooth Animations**: Polished user interactions

## 📊 Data

- **51 Flights** across major Indian routes
- **15 Airports** with full details
- **Multiple Airlines**: Tarak Airlines fleet
- **Aircraft Types**: Boeing 737, Airbus A320, A321, 737 MAX
- **Realistic Pricing**: Competitive flight prices
- **Comprehensive Info**: Duration, stops, aircraft details

All data is stored locally - no external APIs required!




