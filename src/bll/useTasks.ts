import { useEffect, useState } from "react";

import type { TasksListData } from "../dal/api.ts";
import { getTasksList } from "../dal/api.ts";

export function useTasks() {
  const [tasks, setTasks] = useState<Array<TasksListData> | null>(null);

  useEffect(() => {
    getTasksList().then((json) => setTasks(json.data));
    // setTasks(tasksResponse);
  }, []);
  return { tasks };
}
