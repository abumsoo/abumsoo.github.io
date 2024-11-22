import ProjectTitle from "@/app/ui/ProjectTitle";
import ProjectImage from "@/app/ui/ProjectImage";
import PenguLink from "@/app/ui/PenguLink";

export default function Digilib() {
  return (
    <div>
      <div className="py-8">
        <ProjectTitle>Digilib - future library</ProjectTitle>
        <p>
          Web app to log books that you have and want to read in a futuristic
          digital library. Looks up basic book information like page count and
          book cover using the Open Library API
        </p>
      </div>

      <div className="flex justify-between">
        <PenguLink href="https://flightless.xyz/library">Live App</PenguLink>
        <PenguLink href="https://github.com/abumsoo/library">Source</PenguLink>
      </div>
      <ProjectImage
        src="/digilib.png"
        alt="screenshot of futuristic digital library"
        bgcolor="bg-[#0a0a0a]"
      />
    </div>
  );
}
