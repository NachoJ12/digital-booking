import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Forms/Login/Login';

import Search from './components/Search/Search';
import SideBar from './components/SideBar/SideBar';
import SignUp from './components/Forms/SignUp/SignUp';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="overlay"></div>
        <SideBar />
        <Search />
        <Routes>
          <Route path="/" element={<Categories />} />
          {/* Search - Sacar de esta ruta, ahora solo para visualizarlo */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
