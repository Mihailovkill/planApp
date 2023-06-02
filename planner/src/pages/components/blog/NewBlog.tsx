import styles from "../../../styles/blog/NewBlog.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    //e.preventDefault();

    // Here, you'd want to send a POST request to your API to create a new blog
    console.log(`Submitting New Blog: ${title} ${content}`);

    // Redirect to blogs page after successful blog creation
    //router.push("/blogs");
  };

  return (
    <div className={styles.newBlogWindow}>
      <div className={styles.newBlogContainer}>
        <h1>Add New Blog</h1>
        <form onSubmit={handleSubmit} className={styles.newBlogForm}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.newBlogInput}
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.newBlogTextarea}
          />

          <button type="submit" className={styles.newBlogButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
