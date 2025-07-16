import { UiLoader } from "@/shared/ui/loader";

import styles from "./styles.module.scss";

export function Layout() {
  return (
    <div data-testid="page-loader" className={styles.pageLoader}>
      <UiLoader />
    </div>
  );
}
