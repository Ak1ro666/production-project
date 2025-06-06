import { ButtonHTMLAttributes } from "react";

import cn from "@/shared/lib/utils/classNames/classNames";

import styles from "./styles.module.scss";

const LayoutTheme = {
  primary: "primary",
  secondary: "secondary",
  inverted_primary: "inverted-primary",
  inverted_secondary: "inverted-secondary",
  clear: "clear",
} as const;

type LayoutTheme = (typeof LayoutTheme)[keyof typeof LayoutTheme];

export function Layout({
  className,
  theme = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: LayoutTheme;
}) {
  return (
    <button
      className={cn(styles.button, {}, [className, styles[theme]])}
      {...props}
    />
  );
}
