import TasksList from "./TasksList.tsx";
import TaskDetails from "./TaskDetails.tsx";

import { useTaskSelection } from "../bll/useTaskSelection.ts";

function MainPage() {
  const { taskId, setTaskId, boardId, setBoardId } = useTaskSelection();

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
