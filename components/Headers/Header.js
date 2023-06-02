import Link from 'next/link';
import styles from './headerstyles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>        
            <Link className={styles.navLink} href="/products">Products</Link>
            <Link className={styles.navLink} href="/cart">Cart</Link>
            <Link className={styles.navLink} href="/orders">Orders</Link>
      </nav>
    </header>
  );
};

export default Header;
