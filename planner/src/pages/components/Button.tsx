import Link from "next/link";
import styles from "../../styles/Buttons/Button.module.css";

interface ButtonProps {
  text: string;
  link: string;
}

export default function Button({ text, link }: ButtonProps) {
  return (
    <Link href={link}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
}
