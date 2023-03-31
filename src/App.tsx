import './App.css';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FinderPage from './pages/FinderPage/FinderPage';
import { FC } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';


const App: FC = () => {
  return (
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
  )
}

export default App
