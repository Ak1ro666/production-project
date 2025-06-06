import { useState } from "react";

export function useCollapsed() {
  const [collapsed, setCollapased] = useState<boolean>(false);

  const toggle = () => {
    setCollapased((prev) => !prev);
  };

  return {
    collapsed,
    toggle,
  } as const;
}
