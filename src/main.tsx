import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootEle = document.getElementById("root");
const reactRoot = createRoot(rootEle!);

reactRoot.render(<App />);
