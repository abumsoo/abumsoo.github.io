import Link from "next/link";
import ProjectImage from "./ProjectImage";

type ProjectItemProps = {
  projectUrl: string;
  title: string;
  imgAlt: string;
  imgSrc: string;
  imgBgColor: string;
};

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <Link href={props.projectUrl}>
      <h3 className="text-lg underline hover:-translate-y-1 hover:duration-300">
        {props.title}
      </h3>
      <ProjectImage
        alt={props.imgAlt}
        src={props.imgSrc}
        bgcolor={props.imgBgColor}
      />
    </Link>
  );
}
