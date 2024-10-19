import styles from './Hero.module.css';
import image from "./Images/skin-care-.jpeg"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      
      <h2 className={styles.heading}>Your Journey to Perfect Skin Starts Here</h2>
      <p className={styles.paragraph}>Explore our range of skincare products tailored for your unique needs.</p>
      
      </section>
  );
};

export default HeroSection;

