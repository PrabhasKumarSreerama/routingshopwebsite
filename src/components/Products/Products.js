import ProductItem from "../ProductItem/ProductItem";
import "./Products.css"


function Products({ products, err, loading, addToCart }) {

    return (
        <>
            <div className="product-cards" >
                {err && <h4 className="error">Error: {err}</h4>}
                {loading && <div className="loading">
                    <img src="https://media.tenor.com/JwPW0tw69vAAAAAi/cargando-loading.gifspinner.gif" alt="Loading..." />
                </div>}
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} addToCart={addToCart} />
                ))}
            </div>
        </>
    );
}

export default Products;