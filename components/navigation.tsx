"use client";
import Link from "next/link";
import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <>{path === "/" ? "🔥" : ""}</>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
