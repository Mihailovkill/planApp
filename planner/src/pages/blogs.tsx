import Link from "next/link";
import styles from "../styles/Blogs.module.css";
import NewBlog from "./components/blog/NewBlog";
import BlogList from "./components/blog/BlogList";
import { useState } from "react";
import Header from "./components/Header";

const Blogs = () => {
  const [newBlogVisible, setNewBlogVisible] = useState(false);
  return (
    <>
      <Header />
      <div className={styles.blogsContainer}>
        <div className={styles.addBlog}>
          <button
            className={styles.addBlogButton}
            onClick={() => setNewBlogVisible(!newBlogVisible)}
          >
            Create new Blog
          </button>
          {newBlogVisible && (
            <div className={styles.newBlogWindow}>
              <NewBlog />
            </div>
          )}
        </div>

        <BlogList />

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search blogs..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
