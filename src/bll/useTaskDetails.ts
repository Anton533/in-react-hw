import { useState, useEffect } from "react";
import type { TaskDetailsData } from "../dal/api.ts";
import { getTask } from "../dal/api.ts";

export function useTaskDetails(
  selectedTaskId: string | null,
  boardId: string | null
) {
  const [details, setDetails] = useState<TaskDetailsData | null>(null);

  useEffect(() => {
    if (!selectedTaskId) return;

    getTask(boardId).then((json) => setDetails(json.data));
  }, [selectedTaskId, boardId]);

  return { details };
}
