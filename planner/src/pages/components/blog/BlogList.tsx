import Link from "next/link";
import styles from "../../../styles/blog/BlogList.module.css";

// this can come from an API call in the future
const blogs = [
  { id: 1, title: "First Blog", slug: "first-blog" },
  { id: 2, title: "Second Blog", slug: "second-blog" },
  // more blogs here
];

const BlogList = () => {
  return (
    <div className={styles.blogList}>
      {blogs.length ? (
        blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className={styles.blogLink}
          >
            <span>{blog.title}</span>
          </Link>
        ))
      ) : (
        <p className={styles.noBlogs}>No blogs yet.</p>
      )}
    </div>
  );
};

export default BlogList;
