import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Forms/Login/Login';
import SideBar from './components/SideBar/SideBar';
import SignUp from './components/Forms/SignUp/SignUp';
import Home from './components/Home/Home';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="container">
          <Header />
          <div className="overlay"></div>
          <SideBar />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* Search - Sacar de esta ruta, ahora solo para visualizarlo */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </UserContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
