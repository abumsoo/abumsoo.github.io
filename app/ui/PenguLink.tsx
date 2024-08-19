import Link from "next/link";
import React from "react";

type PenguLinkProps = {
  href: string;
  children: React.ReactNode;
};

const PenguLink = (props: PenguLinkProps) => {
  return (
    <Link className="underline" href={props.href}>
      {props.children}
    </Link>
  );
};

export default PenguLink;
