import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/Buttons/LoginButton.module.css";

export default function LoginButton() {
  return (
    <Link href={"/login"}>
      <button className={styles.LoginButton}>Login</button>
    </Link>
  );
}
