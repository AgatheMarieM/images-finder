import './App.css';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FinderPage from './pages/FinderPage/FinderPage';
import { useState, FC } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import FavoritesContext from './context/favorites-context';

const App: FC = () => {
  //const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <FavoritesContext.Provider value={{
      favorites: ['favorite array test']
    }}>
      <BrowserRouter>
        <nav>
          <Link className='image-finder' to='/'>
            <Header />
          </Link>
          <NavLink to='/'>Home </NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<FinderPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesContext.Provider>

  )
}

export default App
