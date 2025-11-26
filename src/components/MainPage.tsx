import { useState } from "react";

import TasksList from "./TasksList.tsx";
import TaskDetails from "./TaskDetails.tsx";

function MainPage() {
  const [taskId, setTaskId] = useState(null);
  const [boardId, setBoardId] = useState(null);

  const handleTaskSelect = (taskId, boardId) => {
    setTaskId(taskId);
    setBoardId(boardId);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <TasksList selectedTaskId={taskId} onTaskSelect={handleTaskSelect} />
        <TaskDetails selectedTaskId={taskId} boardId={boardId} />
      </div>
    </div>
  );
}

export default MainPage;
