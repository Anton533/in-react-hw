import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import PageTitle from "./components/PageTitle.tsx";
import TasksList from "./components/TasksList.tsx";
import TaskDetails from "./components/TaskDetails.tsx";
import Footer from "./components/Footer.tsx";

const rootEle = document.getElementById("root");
const reactRoot = createRoot(rootEle!);

reactRoot.render(<MainPage />);

function MainPage() {
  return (
    <div>
      <Header />
      <PageTitle />
      <div style={{ display: "flex", gap: "30px" }}>
        <TasksList />
        <TaskDetails />
      </div>
      <Footer />
    </div>
  );
}
