import NavBar from "@/app/ui/NavBar";
import ProjectItem from "@/app/ui/ProjectItem";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-screen relative overflow-hidden">
        <NavBar className="hidden md:block" />
      </div>
      <div className="my-12">
        <h2 className="text-xl text-center">
          Hi! I’m a full stack developer based in New York City
        </h2>
      </div>
      <div
        className="flex flex-col mx-2 md:mx-auto max-w-[540px] gap-4 md:gap-8"
        id="projects"
      >
        <ProjectItem
          projectUrl="/projects/visualgo"
          title="Algorithm visualizer"
          imgAlt="screenshot of quicksort"
          imgSrc="/visualgo.png"
          imgBgColor="bg-[#172554]"
        />
        <ProjectItem
          projectUrl="/projects/tictactoe"
          title="Tic Tac Toe AI"
          imgAlt="screenshot of tic tac toe game"
          imgSrc="/tic-tac-toe.png"
          imgBgColor="bg-[#2a5a65]"
        />
        <ProjectItem
          projectUrl="/projects/digilib"
          title="Digilib"
          imgAlt="screenshot of futuristic digital library"
          imgSrc="/digilib.png"
          imgBgColor="bg-[#0a0a0a]"
        />
        <ProjectItem
          projectUrl="/projects/whatthebin"
          title="What The Bin - pygame"
          imgAlt="screenshot of what the bin game"
          imgSrc="/whatthebin.png"
          imgBgColor="bg-black"
        />
        <ProjectItem
          projectUrl="/projects/ssb4"
          title="Super Smash Bros Binary Search Tree"
          imgAlt="screenshot of command line interface"
          imgSrc="/ssb4.png"
          imgBgColor="bg-[#3f3f3f]"
        />
      </div>

      <div className="flex flex-col items-center my-12">
        <Link
          className="underline text-slate-500"
          href="https://www.linkedin.com/in/bumskim"
        >
          linkedin.com/in/bumskim
        </Link>
      </div>
    </div>
  );
}
