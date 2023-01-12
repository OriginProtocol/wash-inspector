import type { FunctionComponent, ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

const PageTitle: FunctionComponent<PageTitleProps> = ({
  children,
  className = "",
}) => <h1 className={`text-4xl font-medium ${className}`}>{children}</h1>;

export { PageTitle };
