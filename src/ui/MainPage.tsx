import { useState } from "react";

import TasksList from "./TasksList.tsx";
import TaskDetails from "./TaskDetails.tsx";

function MainPage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);

  const handleTaskSelect = (
    taskId: string | null,
    boardId: string | null
  ): void => {
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
