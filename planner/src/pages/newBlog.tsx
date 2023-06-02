import React from "react";
import Link from "next/link";
import styles from "../../styles/Blogs.module.css";
import BlogList from "./components/blog/BlogList";

const Blogs: React.FC = () => {
  return (
    <div className={styles.blogsContainer}>
      <div className={styles.addBlog}>
        <Link href="/newBlog">
          <button className={styles.addBlogButton}>Add new Blog</button>
        </Link>
      </div>

      <div className={styles.blogList}>
        <BlogList />
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search blogs..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default Blogs;