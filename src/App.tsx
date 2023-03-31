import './App.css';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FinderPage from './pages/FinderPage/FinderPage';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to='/'>Finder</Link>
          <Link to='/favorites'>Favorites</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<FinderPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
