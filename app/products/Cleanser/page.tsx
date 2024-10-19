import styles from './Cleanser.module.css';

const Cleanser = () => {
  return (
    <div className={styles.productPage}>
      <h1 className={styles.title}>Cleanser</h1>
      <img src="/images/cleanser-image.jpeg" alt="Cleanser" className={styles.productImage} />
      <p className={styles.description}>
        Our gentle cleanser effectively removes dirt and impurities without stripping your skin of essential moisture.
      </p>
    </div>
  );
};

export default Cleanser;