
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav'
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import { Routes, Route, useLocation } from 'react-router-dom';
import Products from './Screen/Products/product';
import Sign from './components/sign';
import BackToTop from './components/backToTop';
import Footer from './components/footer/footer';
import ProductCard from './Screen/Cards/productCard';
import Cart from './Screen/Cart/cart';


function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Nav />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product' element={<Products />} />
        <Route path='/productCard' element={<ProductCard />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {location.pathname !== '/cart' && <Sign />}
      <BackToTop />
      <Footer />



    </div>

  );
}

export default App;
