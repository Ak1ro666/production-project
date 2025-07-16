import styles from "./styles.module.scss";

import cn from "@/shared/lib/utils/classNames";

export function Layout({ className }: { className?: string }) {
  return (
    <div data-testid="loader" className={cn(styles["lds-ellipsis"], {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
