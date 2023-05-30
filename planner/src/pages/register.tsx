import styles from "../styles/register.module.css";
import Header from "./components/Header";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Header />
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Register</h1>
        <form className={styles.form}>
          <span className={styles.span}>Username:</span>
          <input
            type="text"
            maxLength={22}
            placeholder="Username"
            className={styles.inputField}
          />
          <span className={styles.span}>First name:</span>
          <input
            type="text"
            maxLength={22}
            placeholder="First name"
            className={styles.inputField}
          />
          <span className={styles.span}>Last name:</span>
          <input
            type="text"
            maxLength={22}
            placeholder="Last name"
            className={styles.inputField}
          />
          <span className={styles.span}>E-mail:</span>
          <input
            type="email"
            maxLength={50}
            placeholder="E-mail"
            className={styles.inputField}
          />
          <span className={styles.span}>Password:</span>
          <input
            type="password"
            maxLength={22}
            placeholder="Password"
            minLength={8}
            className={styles.inputField}
          />
        </form>
        <div className={styles.alreadyHasAcc}>
          <p className={styles.hasAccText}>
            Already have an account?
            <button className={styles.signInButton}>Sign in</button>
          </p>
        </div>
      </div>
    </>
  );
}
