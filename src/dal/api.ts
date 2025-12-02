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

type GetTaskDetailsOutput = {
  data: TaskDetailsData;
};

export type TaskDetailsData = {
  id: string;
  type: string;
  attributes: TaskDetailsAttributesData;
};

type TaskDetailsAttributesData = {
  title: string;
  boardTitle: string;
  description: string | null;
};

export const getTask = (boardId: string | null) => {
  const promise: Promise<GetTaskDetailsOutput> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/" +
      boardId +
      "/tasks/" +
      boardId,
    {
      headers: {
        "api-key": "60d7ad4c-190a-4d97-87b6-38c40e7c1eec",
      },
    }
  ).then((res) => res.json());
  // setDetails(detailsResponse.data);

  return promise;
};

// const tasksResponse = [
//   {
//     id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
//     type: "tasks",
//     attributes: {
//       title: "learn useEffect",
//       boardId: "13923117-72de-4788-a7f0-4c42f162a5ab",
//       status: 2,
//       priority: 3,
//       addedAt: "2025-09-09T08:30:59.034Z",
//       attachmentsCount: 0,
//     },
//   },
//   {
//     id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
//     type: "tasks",
//     attributes: {
//       title: "html",
//       boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
//       status: 0,
//       priority: 1,
//       addedAt: "2025-08-27T17:51:48.031Z",
//       attachmentsCount: 0,
//     },
//   },
//   {
//     id: "b6213cee-b407-4580-9276-be4f5919375d",
//     type: "tasks",
//     attributes: {
//       title: "css",
//       boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
//       status: 0,
//       priority: 1,
//       addedAt: "2025-08-27T17:51:44.710Z",
//       attachmentsCount: 0,
//     },
//   },
//   {
//     id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
//     type: "tasks",
//     attributes: {
//       title: "js",
//       boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
//       status: 0,
//       priority: 1,
//       addedAt: "2025-08-27T17:51:21.515Z",
//       attachmentsCount: 0,
//     },
//   },
//   {
//     id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
//     type: "tasks",
//     attributes: {
//       title: "title3",
//       boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
//       status: 0,
//       priority: 0,
//       addedAt: "2025-07-03T14:56:48.867Z",
//       attachmentsCount: 0,
//     },
//   },
// ];

type GetTaskListOutput = {
  data: Array<TasksListData>;
};

export type TasksListData = {
  id: string;
  type: string;
  attributes: TasksListAttributesData;
};

export type TasksListAttributesData = {
  id: string;
  title: string;
  boardId: string;
  status: number;
  priority: number;
  addedAt: string;
  attachmentsCount: number;
};

export const getTasksList = () => {
  const promise: Promise<GetTaskListOutput> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/tasks",
    {
      headers: {
        "api-key": "60d7ad4c-190a-4d97-87b6-38c40e7c1eec",
      },
    }
  ).then((res) => res.json());

  return promise;
};
