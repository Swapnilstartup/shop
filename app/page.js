import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h2>Welcome to My Shop</h2>
      </div>
    </main>
  )
}
