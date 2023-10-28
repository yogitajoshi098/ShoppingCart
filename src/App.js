import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import { ShopContextProvider } from './context/ShopContext';




function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
