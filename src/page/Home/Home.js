import './Home.css';
import Products from '../../components/Products/Products';

function Home({ products, addToCart, err, loading}) {

  return (
    <>
      <div className="app-container">
        <Products products={products} addToCart={addToCart} err={err} loading={loading} />
      </div>
    </>
  )
}

export default Home;