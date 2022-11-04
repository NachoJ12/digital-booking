import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Forms/Login/Login';
import SideBar from './components/SideBar/SideBar';
import SignUp from './components/Forms/SignUp/SignUp';
import Home from './components/Home/Home';
import UserContextProvider from './context/UserContext';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="container">
          <Header />
          <div className="overlay"></div>
          <SideBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </UserContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
