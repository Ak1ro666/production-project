import { UiLoader } from "@/shared/ui/loader";

import styles from "./styles.module.scss";

export function Layout() {
  return (
    <div className={styles.pageLoader}>
      <UiLoader />
    </div>
  );
}
