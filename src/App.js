import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Assets/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Order from './Pages/Order/Order';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import UserProfile from './Components/UserProfile/UserProfile';
import Notification from './Components/Notification/Notification';
import Search from './Pages/Search';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import EmailVerification from './Pages/EmailVerification';
import PreLoader from './Components/PreLoader/PreLoader';
import ThankYou from './Components/ThankYou/ThankYou';
import FundRaising from './Pages/FundRaising';


function App() {
  return (
    <div>
      {/* <PreLoader /> */}
      <BrowserRouter>
        <Routes>
          {/* Routes for Login and Signup without layout */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          {/* Routes with Navbar and Footer */}
          <Route path='/*' element={<WithLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Define a component with Navbar and Footer
const WithLayout = () => {
  const location = useLocation();
  const isPaymentPage = location.pathname === '/order';
  const isThanksPage = location.pathname === '/thanks';
  const isFundRaising = location.pathname === '/fundraising';
  return (
    <div>
      {/* <Navbar /> */}
      <PreLoader />
      {!isPaymentPage && !isThanksPage && !isFundRaising && <Navbar />}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/t-shirt' element={<ShopCategory banner={men_banner} category="t-shirts" />} />
        <Route path='/other-items' element={<ShopCategory banner={women_banner} category="wristbands" />} />
        <Route path='/combopacks' element={<ShopCategory banner={kid_banner} category="others" />} />
        <Route path='/product'>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/search' element={<Search />} />
        <Route path='/thanks' element={<ThankYou />} />
        <Route path='/fundraising' element={<FundRaising />} />

      </Routes>
      {!isPaymentPage && !isThanksPage && !isFundRaising && <Footer />}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
