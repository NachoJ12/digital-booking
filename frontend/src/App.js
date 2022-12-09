import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Forms/Login/Login';
import SideBar from './components/SideBar/SideBar';
import SignUp from './components/Forms/SignUp/SignUp';
import Home from './components/Home/Home';
import UserContextProvider from './context/UserContext';
import ProductDetailCointaner from './components/ProductDetailContainer/ProductDetailCointaner';
import DateRangeProvider from './context/DateRangeContext';
import ProductBooking from './pages/ProductBooking/ProductBooking';
import BookingSucces from './components/BookingSuccess/BookingSucces';
import NotFound from './pages/NotFound/NotFound';
import Administration from './pages/Administration/Administration';
import NewProductSuccessful from './components/NewProductSuccessful/NewProductSuccessful';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <DateRangeProvider>
          <div className="container">
            <Header />
            <div className="overlay"></div>
            <SideBar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/products/:id"
                element={<ProductDetailCointaner />}
              />
              <Route path="/product/:id/booking" element={<ProductBooking />} />
              <Route path="/booking/success" element={<BookingSucces />} />
              <Route path="/administration" element={<Administration />} />
              <Route
                path="/successful-new-product"
                element={<NewProductSuccessful />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </DateRangeProvider>
      </UserContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
