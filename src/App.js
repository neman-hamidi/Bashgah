import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  let routess = useRoutes(routes);
  return (
    <>
      <div>{routess}</div>
    </>
  );
}

export default App;
