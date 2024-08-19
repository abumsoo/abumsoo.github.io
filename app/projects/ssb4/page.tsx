import ProjectTitle from "@/app/ui/ProjectTitle";
import ProjectImage from "@/app/ui/ProjectItem";
import PenguLink from "@/app/ui/PenguLink";

export default function Ssb4() {
  return (
    <div>
      <div className="py-8">
        <ProjectTitle>Super Smash Bros 4 Binary Search Tree</ProjectTitle>
        <p>
          C++ command line application to search up information about characters
          that are in Super Smash Bros 4 such as character rank and which games
          they come from
        </p>
      </div>

      <div className="flex justify-end">
        <PenguLink href="https://github.com/abumsoo/Kim_CSCI2270_FinalProject">
          Source
        </PenguLink>
      </div>
      <ProjectImage
        src="/ssb4.png"
        alt="screenshot of command line tool for super smash bros binary search tree"
        bgcolor="bg-[#3f3f3f]"
      />
    </div>
  );
}
