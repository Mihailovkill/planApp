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

      <div className={styles.filler}></div>

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
