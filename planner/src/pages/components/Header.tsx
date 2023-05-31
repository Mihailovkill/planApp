import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import Navbar from "./navbar/Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={150}
            height={75}
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Image src="/searchIcon.png" alt="Search" width={10} height={11} />
        </button>
      </div>

      <div className={styles.navbar}>
        <Navbar />
      </div>
    </header>
  );
}
