type ProjectTitleProps = {
  children: string;
};

export default function ProjectTitle({ children }: ProjectTitleProps) {
  return <h1 className="text-xl pb-2">{children}</h1>;
}
