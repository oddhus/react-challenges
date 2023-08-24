import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { ErrorBoundaryFallback } from "./ErrorBoundaryFallback";
import { challengesBySection } from "./challenges";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {challengesBySection
            .flatMap((section) => section.challenges)
            .map((challenge) => {
              const Challenge = challenge.component;
              return (
                <Route
                  key={challenge.name}
                  path={`/${challenge.name}`}
                  element={
                    <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
                      <React.Suspense fallback={<>loading...</>}>
                        <Challenge />
                      </React.Suspense>
                    </ErrorBoundary>
                  }
                />
              );
            })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
