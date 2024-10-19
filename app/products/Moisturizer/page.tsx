import styles from './Moisturizer.module.css'; 

const Moisturizer = () => {
  return (
    <div className={styles.productPage}>
      <h1 className={styles.title}>Moisturizer</h1>
      <img src="/images/moisturizer-image.jpeg" alt="Moisturizer" className={styles.productImage} />
      <p className={styles.description}>
        Our rich moisturizer hydrates and nourishes your skin, leaves it soft, smooth, and radiant.
      </p>
    </div>
  );
};

export default Moisturizer;