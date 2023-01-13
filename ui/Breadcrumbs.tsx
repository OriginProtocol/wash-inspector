import type { FunctionComponent } from "react";
import Link from "next/link";

interface Breadcrumb {
  text: string;
  uri: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ crumbs = [] }) => {
  const allCrumbs = [
    {
      text: "Collections",
      uri: "/collection",
    },
  ].concat(crumbs);

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {allCrumbs.map(({ text, uri }, index) => (
          <li key={index}>
            <Link href={uri}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Breadcrumbs };
