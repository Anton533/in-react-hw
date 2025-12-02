import { useState, useEffect } from "react";
import type { TaskDetailsData } from "../dal/api.ts";
import { getTask } from "../dal/api.ts";

type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

export default function TaskDetails({ selectedTaskId, boardId }: Props) {
  const [details, setDetails] = useState<TaskDetailsData | null>(null);

  useEffect(() => {
    if (!selectedTaskId) return;

    getTask(boardId).then((json) => setDetails(json.data));
  }, [selectedTaskId, boardId]);

  return (
    <div className="flex">
      <div className="task-details">
        <h2 className="task-details__title">Task details</h2>
        <ul className="task-details__list">
          {!selectedTaskId && "Task is not selected"}

          {selectedTaskId && !details && "Loading..."}

          {selectedTaskId &&
            details &&
            boardId !== selectedTaskId &&
            "Loading..."}

          {selectedTaskId && details && boardId === selectedTaskId && (
            <>
              <li>{"Title: " + details.attributes.title}</li>
              <li>{"Board title: " + details.attributes.boardTitle}</li>
              <li>
                <span>Description: </span>
                {details.attributes.description
                  ? details.attributes.description
                  : "No description"}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
