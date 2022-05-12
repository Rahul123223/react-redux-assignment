import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { Navbar } from './Component/Navbar';
import { Register } from './Component/Register';
import {ProductPage} from './Component/ProductPage';
import { Cart } from './Component/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/product-page/:id' element={<ProductPage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

      </Routes>
   
    </>
  );
}

export default App;
