import NavBar from './components/navbar/NavBar';
import Cart from './page/Cart/Cart';
import Home from './page/Home/Home';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const rs = await fetch('https://fakestoreapi.com/products');
        if (!rs.ok) {
          throw new Error("Failed to fetch the products");
        }
        const data = await rs.json();
        setProducts(data);
        setLoading(false)
      } catch (error) {
        setErr(error.message)
        setLoading(false)
      }
    }
    fetchProducts();
  }, [])

  const addToCart = (product) => {
    if (cart.some(cur => cur.id === product.id)) {
      alert('Item already added to cart');
    } else {
      setCart([...cart, product]);
    }
  }

  const removeFromCart = (product) => {
    setCart(cart.filter(cur => cur.id !== product.id));
  };


  return (
    <>
      <Router>
        <NavBar cartCount={cart.length} />  
        <Routes>
          <Route path='/' element={<Home products={products} addToCart={addToCart} err={err} loading={loading} />} />
          <Route path='/addcart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
