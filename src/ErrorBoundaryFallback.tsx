import { FallbackProps } from "react-error-boundary";

export const ErrorBoundaryFallback = ({ error }: FallbackProps) => {
  return (
    <div role="alert">
      <p style={{ color: "red" }}>Solve the challenge and try again</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={() => window.location.reload()}>Try now :)</button>
    </div>
  );
};
