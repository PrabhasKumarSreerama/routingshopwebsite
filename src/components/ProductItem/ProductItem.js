import "./ProductItem.css"

function ProductItem({ product, addToCart }) {
    const { title, price, description, category, image, rating: { rate, count } } = product;
    return (
        <>
            <div className="product-card">
                <img className="product-image" src={image} alt={title} />
                <div className="product-info">
                    <h2 className="product-title">{title}</h2>
                    <p className="product-category">{category}</p>
                    <p className="product-price">${price}</p>
                    <p className="product-description">
                        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                    </p>
                    <div className="product-meta">
                        <span className="product-rate">Rating: {rate}{'\u2B50'}</span>
                        <span className="product-count">({count} reviews)</span>
                    </div>
                    <button onClick={() => addToCart(product)} className="add-btn">Add to Cart</button>
                </div>
            </div>
        </>
    )
};

export default ProductItem;