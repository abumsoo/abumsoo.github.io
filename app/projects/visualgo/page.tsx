import PenguLink from "@/app/ui/PenguLink";
import ProjectImage from "@/app/ui/ProjectItem";
import ProjectTitle from "@/app/ui/ProjectTitle";

export default function Ssb4() {
  return (
    <div>
      <div className="py-8">
        <ProjectTitle>Algorithm visualizer</ProjectTitle>
        <p>
          Interactive algorithm visualizer, which currently implements quicksort
        </p>
      </div>

      <div className="flex justify-between">
        <PenguLink href="https://flightless.xyz/visualgo">Live App</PenguLink>
        <PenguLink href="https://github.com/abumsoo/visualgo">Source</PenguLink>
      </div>
      <ProjectImage
        src="/visualgo0.png"
        alt="screenshot of sorted array in visualgo"
        bgcolor="bg-[#3f3f3f]"
      />
    </div>
  );
}
