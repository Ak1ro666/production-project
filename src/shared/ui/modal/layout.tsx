import { ReactNode } from "react";

export function Layout({
  className,
  isOpen,
  children,
}: {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}) {
  if (!isOpen) {
    return;
  }

  return <div className={className}>{children}</div>;
}

Layout.Content = function Content({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
};

Layout.Header = function Header({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
};

Layout.Footer = function Footer({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
};
