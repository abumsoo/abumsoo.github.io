import PenguLink from "@/app/ui/PenguLink";
import ProjectImage from "@/app/ui/ProjectItem";
import ProjectTitle from "@/app/ui/ProjectTitle";

export default function whatthebin() {
  return (
    <div>
      <div className="py-8">
        <ProjectTitle>What The Bin - pygame</ProjectTitle>
        <p>
          Python desktop game where the player is given three different colors
          on screen and a binary number, and they need to correctly choose the
          color that is represented by the binary number
        </p>
      </div>

      <div className="flex justify-between">
        <PenguLink href="https://github.com/abumsoo/csci1300-whatthebin">
          Source
        </PenguLink>
      </div>
      <ProjectImage
        src="/whatthebin.png"
        alt="screenshot of what the bin python game"
        bgcolor="bg-black"
      />
    </div>
  );
}
