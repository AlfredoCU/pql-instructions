import "./App.css";
import Loader from "../components";
import usePageLoader from "../utils/hooks";

export default function App() {
  const [showView] = usePageLoader(5000);

  if (!showView) {
    return <Loader />;
  }

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}
