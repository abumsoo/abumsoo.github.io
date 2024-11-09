import Image from "next/image";
import styles from "./landing.module.css";
import NavBar from "@/app/ui/NavBar";
import ProjectImage from "@/app/ui/ProjectItem";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen relative overflow-hidden">
        <NavBar className="hidden md:block" />

        <div className="flex flex-col gap-16 h-full md:h-auto justify-center">
          <h1 className="text-8xl md:text-9xl text-center">Flightless</h1>
          <Image
            alt="white penguin stencil"
            className={`${styles.pengubg} w-auto h-auto md:mx-auto md:max-w-[80%] object-contain ml-6 mr-6`}
            width={0}
            height={0}
            sizes="100vh"
            src="/penguinwhite.png"
          />
        </div>
      </div>
      <div
        className="w-screen h-screen relative flex flex-col justify-center px-2"
        id="about"
      >
        <hr></hr>
        <div className="flex flex-col justify-center gap-1 max-w-[720px] mx-auto py-10">
          <h2 className="text-xl pb-4">
            Hi! I’m a full stack developer based in New York City
          </h2>
          <p>
            I have a few years of experience in React, TypeScript/JavaScript,
            and Python
          </p>
          <p>
            I&apos;m currently using NextJS for side projects, and learning
            embedded software engineering for fun
          </p>
          <Link
            href="mailto:bum.s.kim42@gmail.com"
            className="underline text-slate-500 pt-4"
          >
            Get in Touch
          </Link>
        </div>
        <hr></hr>
      </div>
      <div
        className="flex flex-col mx-2 md:mx-auto max-w-[720px] gap-4 md:gap-12"
        id="projects"
      >
        <Link href="/projects/visualgo" id="here">
          <h3 className="text-lg">Algorithm visualizer</h3>
          <ProjectImage
            alt="screenshot of quicksort"
            src="/visualgo.png"
            bgcolor="bg-[#2a5a65]"
          />
        </Link>
        <Link href="/projects/tictactoe" id="here">
          <h3 className="text-lg">Tic Tac Toe AI</h3>
          <ProjectImage
            alt="screenshot of tic tac toe game"
            src="/tic-tac-toe.png"
            bgcolor="bg-[#2a5a65]"
          />
        </Link>
        <Link href="/projects/digilib">
          <h3 className="text-lg">Digilib</h3>
          <ProjectImage
            alt="screenshot of futuristic digital library"
            src="/digilib.png"
            bgcolor="bg-[#0a0a0a]"
          />
        </Link>
        <Link href="/projects/whatthebin">
          <h3 className="text-lg">What The Bin - pygame</h3>
          <ProjectImage
            alt="screenshot of what the bin game"
            src="/whatthebin.png"
            bgcolor="bg-black"
          />
        </Link>
        <Link href="/projects/ssb4">
          <h3 className="text-lg">Super Smash Bros Binary Search Tree</h3>
          <ProjectImage
            alt="screenshot of command line interface"
            src="/ssb4.png"
            bgcolor="bg-[#3f3f3f]"
          />
        </Link>
      </div>
      <div className="flex justify-center my-8">
        <Link
          className="underline text-slate-500"
          href="mailto:bum.s.kim42@gmail.com"
        >
          bum.s.kim42@gmail.com
        </Link>
      </div>
    </div>
  );
}
