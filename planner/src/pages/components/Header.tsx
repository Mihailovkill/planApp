import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import LoginButton from "./login/LoginButton";

export default function Header() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleMouseEnter = () => {
    setNavbarVisible(true);
  };

  const handleMouseLeave = () => {
    setNavbarVisible(false);
  };

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

      <LoginButton />

      <div
        className={styles.navbarContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={styles.dropdownButton}
          onClick={() => setNavbarVisible(!navbarVisible)}
        >
          <Image
            src="/menuButton.png"
            alt="dropdown menu"
            width={28}
            height={19}
            className={styles.menuPicture}
          />{" "}
        </button>
        {navbarVisible && (
          <div className={styles.navbar}>
            <Navbar />
          </div>
        )}
      </div>
    </header>
  );
}
