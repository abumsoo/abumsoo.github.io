"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./work.module.css";

export default function Page() {
  return (
    // <div className="flex px-[20vw] md:px-[33vw]">
    //   <h1 className="text-4xl">Work</h1>

    // </div>
    <div className={`${styles.container} h-full`}>
      <motion.div
        initial={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
        animate={{
          x: 0,
          y: 0,
          left: "calc(100% - 100px)",
          top: "calc(100% - 100px)",
        }}
        transition={{ duration: 2 }}
        className={styles.imageWrapper}
      >
        <Image
          className={styles.pengubg}
          src="/penguinwhite.png"
          alt="penguin white"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
}
