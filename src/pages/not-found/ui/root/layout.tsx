import { ReactNode } from "react";

import styles from "./styles.module.scss";

export function Layout({ title }: { title: ReactNode }) {
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
    </div>
  );
}
