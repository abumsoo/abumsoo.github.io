import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-2 md:mx-auto max-w-[760px]">
      <Link className="underline" href="/#projects">
        Back
      </Link>
      {children}
    </div>
  );
}
