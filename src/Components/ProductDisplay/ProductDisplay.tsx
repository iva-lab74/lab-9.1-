import type { ProductDisplayProps, Product } from "../../types/index"



export default function ProductDisplay({
    //automatically shown
    product,
    showDescription = true,
    showStockStatus = true,
    onAddToCart,
    children,
}: ProductDisplayProps) {
    
    return (
        <div className="product-display">
            <img src= {product.imageUrl} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            {showDescription && <p>{product.description}</p>}
            {showStockStatus && ( <p>{product.inStock ? "In stock" : "Out of Stock"}</p>)}
            { onAddToCart && (<button onClick={() => onAddToCart(product.id)}>Add to Cart</button>)}
            {children}
        </div>
    )};
    