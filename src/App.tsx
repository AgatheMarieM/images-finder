import './App.css';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FinderPage from './pages/FinderPage/FinderPage';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to='/'>Home </NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
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
