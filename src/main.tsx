import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FavoritesContext from './context/favorites-context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavoritesContext.Provider>
      <App />
    </FavoritesContext.Provider>
  </React.StrictMode>,
)
