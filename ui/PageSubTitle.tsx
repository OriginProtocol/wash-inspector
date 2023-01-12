import type { FunctionComponent, ReactNode } from "react";

interface PageSubTitleProps {
  children: ReactNode;
  className?: string;
}

const PageSubTitle: FunctionComponent<PageSubTitleProps> = ({
  children,
  className = "",
}) => <h2 className={`text-2xl font-medium ${className}`}>{children}</h2>;

export { PageSubTitle };
