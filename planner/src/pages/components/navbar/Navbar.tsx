import styles from "../../../styles/navbar/Navbar.module.css";
import Link from "next/link";

const navLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/vlogs", label: "Vlogs" },
  { href: "/planner", label: "Planner" },
  { href: "/calendar", label: "Calendar" },
  { href: "/profile", label: "Profile" },
  // Add new objects here to create more links
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.linksContainer}>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className={styles.link}>
            <span className={styles.span}>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
