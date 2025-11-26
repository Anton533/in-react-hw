import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./components/MainPage.tsx";

const rootEle = document.getElementById("root");
const reactRoot = createRoot(rootEle!);

reactRoot.render(<MainPage />);
