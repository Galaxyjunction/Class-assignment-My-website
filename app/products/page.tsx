import Link from 'next/link';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.productsWrapper}>
        <Link href="/products/Cleanser" className={styles.product}>
          <img src="/images/cleanser-imge.jpeg" alt="Cleanser" className={styles.image} />
          <h2>Cleanser</h2>
          <p>A gentle cleanser for your skin.</p>
        </Link>
        <Link href="/products/Moisturizer" className={styles.product}>
          <img src="/images/moisturizer-image.jpeg" alt="Moisturizer" className={styles.image} />
          <h2>Moisturizer</h2>
          <p>A lightweight moisturizer that hydrates.</p>
        </Link>
        <Link href="/products/Sunscreen" className={styles.product}>
          <img src="/images/sunscreen-image.jpeg" alt="Sunscreen" className={styles.image} />
          <h2>Sunscreen</h2>
          <p>Protect your skin with our broad-spectrum sunscreen.</p>
        </Link>
      </div>
    </div>
  );
};

export default Products
        


