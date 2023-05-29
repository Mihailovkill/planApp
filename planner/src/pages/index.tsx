import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Planner v2</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href={"/"}>My Planner</Link>
        </h1>

        <h2 className={styles.titleRegister}>Register now</h2>

        <p className={styles.description}>Then you can explore:</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Blogs &rarr;</h2>
            <p>Find in-depth articles on various topics.</p>
          </div>

          <div className={styles.card}>
            <h2>Vlogs &rarr;</h2>
            <p>Explore video blogs from our team.</p>
          </div>

          <div className={styles.card}>
            <h2>Planner &rarr;</h2>
            <p>Plan your tasks and keep track of your progress.</p>
          </div>

          <div className={styles.card}>
            <h2>Calendar &rarr;</h2>
            <p>Plan your events</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
