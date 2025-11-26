import { useState, useEffect } from "react";

// const detailsResponse = {
//   data: {
//     id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
//     type: "tasks",
//     attributes: {
//       title: "html",
//       order: -4,
//       deadline: "2025-06-26T11:40:34.962Z",
//       startDate: null,
//       addedAt: "2025-08-27T17:51:48.031Z",
//       priority: 1,
//       status: 0,
//       updatedAt: "2025-08-27T17:51:52.473Z",
//       boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
//       boardTitle: "newt1",
//       description: "Lorem ipsum dolor sit amet consectetur!",
//       attachments: [],
//     },
//   },
// };

export default function TaskDetails({ selectedTaskId, boardId }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!selectedTaskId) return;
    fetch(
      "https://trelly.it-incubator.app/api/1.0/boards/" +
        boardId +
        "/tasks/" +
        boardId,
      {
        headers: {
          "api-key": "60d7ad4c-190a-4d97-87b6-38c40e7c1eec",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setDetails(json.data));
    // setDetails(detailsResponse.data);
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
