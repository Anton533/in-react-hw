import { useEffect, useState } from "react";

import TaskItem from "./TaskItem.tsx";
import type { TasksListData } from "../dal/api.ts";
import { getTasksList } from "../dal/api.ts";

type Props = {
  selectedTaskId: string | null;
  onTaskSelect: (taskId: string | null, boardId: string | null) => void;
};

function TasksList({ selectedTaskId, onTaskSelect }: Props) {
  const [tasks, setTasks] = useState<Array<TasksListData> | null>(null);

  useEffect(() => {
    getTasksList().then((json) => setTasks(json.data));
    // setTasks(tasksResponse);
  }, []);

  if (tasks === null) {
    return <h1>Загрузка...</h1>;
  }
  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }

  const handleClick = (taskId: string | null, boardId: string | null) => {
    onTaskSelect?.(taskId, boardId);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick(null, null);
        }}>
        Reset selection
      </button>
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskAttributes={task.attributes}
              onTaskSelected={handleClick}
              isSelected={task.id === selectedTaskId}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TasksList;
