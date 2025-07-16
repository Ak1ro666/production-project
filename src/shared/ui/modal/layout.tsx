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

  return <div data-testid="modal" className={className}>{children}</div>;
}
