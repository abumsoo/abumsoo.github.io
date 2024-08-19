import ProjectImage from "@/app/ui/ProjectItem";
import PenguLink from "@/app/ui/PenguLink";
import ProjectTitle from "@/app/ui/ProjectTitle";

export default function TicTacToe() {
  return (
    <div>
      <div className="py-8">
        <ProjectTitle>Tic Tac Toe AI</ProjectTitle>
        <p>
          Tic tac toe web game in JavaScript where you can play single player
          mode against a computer or two player mode against a friend locally
        </p>
      </div>
      <div className="flex justify-between">
        <PenguLink href="https://flightless.xyz/tic-tac-toe">
          Live App
        </PenguLink>
        <PenguLink href="https://github.com/abumsoo/tic-tac-toe">
          Source
        </PenguLink>
      </div>
      <ProjectImage
        src="/tic-tac-toe.png"
        alt="screenshot of tic tac toe game"
        bgcolor="bg-[#2a5864]"
      />
    </div>
  );
}
