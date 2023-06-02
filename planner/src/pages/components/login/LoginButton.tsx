import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Buttons/LoginButton.module.css";

export default function LoginButton() {
  return (
    <div className={styles.loginButtonContainer}>
      <Link href={"/login"}>
        <button className={styles.loginButton}>
          <Image
            src="/icons/book.png"
            alt="login button"
            width={28}
            height={19}
          />{" "}
        </button>
      </Link>
    </div>
  );
}
