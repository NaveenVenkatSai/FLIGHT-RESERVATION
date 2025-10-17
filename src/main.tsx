import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Login } from './routes/Login';
import { Search } from './routes/Search';
import { Booking } from './routes/Booking';
import { BoardingPass } from './routes/BoardingPass';
import { AuthProvider } from './services/AuthProvider';
import { ProtectedRoute } from './services/ProtectedRoute';
import { ErrorBoundary } from './components/ErrorBoundary';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Login />,
    errorElement: <ErrorBoundary />
  },
  { 
    path: '/login', 
    element: <Login />,
    errorElement: <ErrorBoundary />
  },
  { 
    path: '/search', 
    element: <ProtectedRoute><Search /></ProtectedRoute>,
    errorElement: <ErrorBoundary />
  },
  { 
    path: '/booking/:flightId', 
    element: <ProtectedRoute><Booking /></ProtectedRoute>,
    errorElement: <ErrorBoundary />
  },
  { 
    path: '/boarding-pass/:bookingId', 
    element: <ProtectedRoute><BoardingPass /></ProtectedRoute>,
    errorElement: <ErrorBoundary />
  },
  {
    path: '*',
    element: <ErrorBoundary />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);


