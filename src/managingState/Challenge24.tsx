import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from "react";

/**
 * Finish the context at the bottom of this file and use it to set the title
 * value instead of the current prop-drilling.
 */
export default function Challenge24() {
  const [title, setTitle] = useState("Change me using context");

  return (
    <>
      <h1>{title}</h1>
      <Container title={title} setTitle={setTitle} />
    </>
  );
}

interface ContainerProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const Container = ({ title, setTitle }: ContainerProps) => (
  <Container1 title={title} setTitle={setTitle} />
);

const Container1 = ({ title, setTitle }: ContainerProps) => (
  <Container2 title={title} setTitle={setTitle} />
);

const Container2 = ({ title, setTitle }: ContainerProps) => (
  <Container3 title={title} setTitle={setTitle} />
);

const Container3 = ({ title, setTitle }: ContainerProps) => {
  return <input value={title} onChange={(e) => setTitle(e.target.value)} />;
};

// TODO complete the provider and use useTitle instead of prop drilling
const TitleContext = createContext("");

const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Title in context");

  // What should be returned here?
};

const useTitle = () => {
  return useContext(TitleContext);
};
