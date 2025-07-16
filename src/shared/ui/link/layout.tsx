import { Link, LinkProps } from "react-router-dom";
import cn from "@/shared/lib/utils/classNames/classNames";

import styles from "./styles.module.scss";

const LayoutTheme = {
  primary: "primary",
  secondary: "secondary",
  inverted_primary: "inverted-primary",
  inverted_secondary: "inverted-secondary",
} as const;

type LayoutTheme = typeof LayoutTheme[keyof typeof LayoutTheme];

export function Layout({
  className,
  theme = "primary",
  children,
  ...otherProps
}: LinkProps & {
  theme?: LayoutTheme;
}) {
  return (
    <Link
      className={cn(styles.link, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
