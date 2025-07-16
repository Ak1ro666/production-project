import { ComponentType, Ref, Suspense } from "react";

import { UiLoader } from "@/shared/ui/loader";
// import { ErrorBoundary } from "./error-boundary";

// TODO: add component Loader

export function WithFallbacks<
  P extends {
    ref?: Ref<HTMLElement>;
    className?: string;
  }
>(Component: ComponentType<P>): ComponentType<P> {
  return function EnhancedComponent(props: P) {
    return (
      // <ErrorBoundary>
      <Suspense fallback={<UiLoader />}>
        <Component {...props} />
      </Suspense>
      // </ErrorBoundary>
    );
  };
}
