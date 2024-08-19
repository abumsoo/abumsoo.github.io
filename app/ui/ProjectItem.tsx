import Image from "next/image";

type ProjectImage = {
  alt: string;
  src: string;
  bgcolor: string;
};

const ProjectImage = (props: ProjectImage) => {
  return (
    <div className={`${props.bgcolor} flex justify-center`}>
      <Image
        alt={props.alt}
        className="w-auto h-48 md:h-96"
        src={props.src}
        width={0}
        height={0}
        sizes="100%"
      />
    </div>
  );
};

export default ProjectImage;
