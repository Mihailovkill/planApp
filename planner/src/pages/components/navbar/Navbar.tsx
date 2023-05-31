import styles from "../../../styles/navbar/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linksContainer}>
        <div className={styles.linkButton}>
          <Link href="/blogs">
            <button className={styles.link}>Blogs</button>
          </Link>
        </div>
        <div className={styles.linkButton}>
          <Link href="/vlogs">
            <button className={styles.link}>Vlogs</button>
          </Link>
        </div>
        <div className={styles.linkButton}>
          <Link href="/planner">
            <button className={styles.link}>Planner</button>
          </Link>
        </div>
        <div className={styles.linkButton}>
          <Link href="/calendar">
            <button className={styles.link}>Calendar</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
