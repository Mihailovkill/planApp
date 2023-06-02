import styles from "../styles/register.module.css";
import Header from "./components/Header";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default function Register() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>
          <Link href={"/"}>My Planner</Link>
        </h1>

        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Registration</h1>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <span className={styles.span}>Username*:</span>
              <input
                type="text"
                maxLength={22}
                placeholder="Username"
                className={styles.inputField}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.span}>First name:</span>
              <input
                type="text"
                maxLength={22}
                placeholder="First name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.span}>Last name:</span>
              <input
                type="text"
                maxLength={22}
                placeholder="Last name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.span}>Real name public:</span>
              <input type="checkbox" className={styles.checkbox} />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.span}>E-mail:</span>
              <input
                type="email"
                maxLength={50}
                placeholder="E-mail"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.span}>Password*:</span>
              <input
                type="password"
                maxLength={22}
                placeholder="Password"
                minLength={8}
                className={styles.inputField}
                required
              />
            </div>
          </form>
          <div className={styles.requiredTextContainer}>
            <p className={styles.requiredText}>Field with * are required!</p>
          </div>
          <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} type="submit">
              Register
            </button>
          </div>
          <div className={styles.alreadyHasAcc}>
            <p className={styles.hasAccText}>
              Already have an account?
              <Link href="/login" className={styles.signInButton}>
                <button className={styles.signInButton}>Sign in</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
