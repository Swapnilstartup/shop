import ProductCard from '@/components/ProductCard/ProductCard'
import styles from './page.module.css'

export default async function Products() {

    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json();
    console.log(products[0].id);


    return (
        <div className={styles.productPage}>
            <h1 className={styles.pageTitle}>Product Catalogue</h1>
            <div className={styles.productList}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>

    )
};

