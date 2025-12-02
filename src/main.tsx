import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./ui/MainPage.tsx";

const rootEle = document.getElementById("root");
const reactRoot = createRoot(rootEle!);

reactRoot.render(
  <>
    <MainPage />
  </>
);
