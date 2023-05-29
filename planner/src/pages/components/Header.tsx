import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import Button from "./Button";
import LoginButton from "./login/LoginButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={150}
          height={75}
          className={styles.logo}
        />
      </Link>

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

      <div className={styles.buttonContainer}>
        <div className={styles.buttons}>
          <Button text="Blogs" link="/blogs" />
          <Button text="Vlogs" link="/vlogs" />
          <Button text="Planner" link="/planner" />
          <Button text="Calendar" link="/calendar" />
        </div>
        <div className={styles.authButton}>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}
