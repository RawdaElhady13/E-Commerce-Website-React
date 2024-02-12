import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Products from './pages/Products';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
           <Route path='/' element={<Shop/>}/>
           <Route path='/mens' element={<ShopCategory category='men' banner={men_banner}/>}/>
           <Route path='/womens' element={<ShopCategory category='women' banner={women_banner}/>}/>
           <Route path='/kids' element={<ShopCategory category='kid' banner={kid_banner}/>}/>
           <Route path='/product' element={<Products/>}>
            <Route path=':productId' element={<Products/>}/> 
           </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  
  );
}

