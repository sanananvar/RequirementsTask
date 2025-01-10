import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoriteProvider from './Context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <FavoriteProvider>
      <App />
  </FavoriteProvider>
)
