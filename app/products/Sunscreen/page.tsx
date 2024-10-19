import styles from './Sunscreen.module.css'; 

const Sunscreen = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Sunscreen</h1>
        <img src="/images/sunscreen-image.jpeg" alt="Sunscreen" className={styles.productImage} />
        <p className={styles.description}>
          Our lightweight sunscreen protects your skin from harmful UV rays, ensuring your skin stays safe and healthy.
        </p>
      </div>
    );
  };
  
  export default Sunscreen;