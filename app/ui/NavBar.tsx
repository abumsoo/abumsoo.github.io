import Link from "next/link";
import React from "react";
// import "animate.css";
import styles from "./navbar.module.css";

type NavBarProps = {
  className?: string;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="flex flex-row justify-between p-[1rem]">
        <h1 className={`${styles.link} text-2xl md:text-4xl`}>
          <Link href="/">FL</Link>
        </h1>
        <div className="flex flex-row gap-4 text-2xl md:text-4xl">
          <Link className={`${styles.link}`} href="#projects">
            Work
          </Link>
          <Link className={`${styles.link}`} href="#about">
            About
          </Link>
          <Link className={`${styles.link}`} href="#">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
