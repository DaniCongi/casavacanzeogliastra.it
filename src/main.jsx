import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import DoveSiamo from './components/DoveSiamo.jsx'
import Villette from './components/Villette.jsx'
import VillaCongera from './components/VillaCongera.jsx'
import VillaAntina from './components/VillaAntina.jsx'
import CulturaCucina from './components/CulturaCucina.jsx'
import Contatti from './components/Contatti.jsx'

const router = createBrowserRouter([
  {
    path: "/",  
    element: <App />,
  },
  {
    path: "/DoveSiamo",
    element: <DoveSiamo />,
  },
  {
    path: "/Villette",
    element: <Villette />,
  },
  {
    path: "/VillaCongera",
    element: <VillaCongera />,
  },
  {
    path: "/VillaAntina",
    element: <VillaAntina />,
  },
  {
    path: "/CulturaCucina",
    element: <CulturaCucina />,
  },
  {
    path: "/Contatti",
    element: <Contatti />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Usa RouterProvider per gestire il router */}
  </StrictMode>
);