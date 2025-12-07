import { useTaskDetails } from "../bll/useTaskDetails";

type Props = {
  selectedTaskId: string | null;
  boardId: string | null;
};

export default function TaskDetails({ selectedTaskId, boardId }: Props) {
  const { details } = useTaskDetails(selectedTaskId, boardId);

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
