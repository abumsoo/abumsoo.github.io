import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

type NavBarProps = {
  className?: string;
};

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="flex flex-row p-[1rem] border-b justify-center">
        <h1 className={`${styles.link} text-2xl md:text-4xl text-center`}>
          <Link href="/">Flightless</Link>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
