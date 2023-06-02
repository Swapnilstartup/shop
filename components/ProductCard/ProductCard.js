import React from 'react'
import styles from './styles.module.css'

const ProductCard = ({ product }) => {
    return (
        <diV className={styles.productCard}>
            <img
                src={product.image}
                className={styles.productImage}
                alt={product.title}
            />
            <h4 className={styles.productName}>{product.title}</h4>
            <p className={styles.productPrice}>Rs. {product.price}</p>
            <button className={styles.addToCart}>Add To Cart</button>
        </diV>
    )
}

export default ProductCard