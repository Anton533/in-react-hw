import { useEffect, useState } from "react";

const tasksResponse = [
  {
    id: "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
    type: "tasks",
    attributes: {
      title: "learn useEffect",
      boardId: "13923117-72de-4788-a7f0-4c42f162a5ab",
      status: 2,
      priority: 3,
      addedAt: "2025-09-09T08:30:59.034Z",
      attachmentsCount: 0,
    },
  },
  {
    id: "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
    type: "tasks",
    attributes: {
      title: "html",
      boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
      status: 0,
      priority: 1,
      addedAt: "2025-08-27T17:51:48.031Z",
      attachmentsCount: 0,
    },
  },
  {
    id: "b6213cee-b407-4580-9276-be4f5919375d",
    type: "tasks",
    attributes: {
      title: "css",
      boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
      status: 0,
      priority: 1,
      addedAt: "2025-08-27T17:51:44.710Z",
      attachmentsCount: 0,
    },
  },
  {
    id: "4c37b109-d930-4ad4-9e37-4f94d618b59a",
    type: "tasks",
    attributes: {
      title: "js",
      boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
      status: 0,
      priority: 1,
      addedAt: "2025-08-27T17:51:21.515Z",
      attachmentsCount: 0,
    },
  },
  {
    id: "0319fde0-3e69-4240-9ee4-278ce525f7f6",
    type: "tasks",
    attributes: {
      title: "title3",
      boardId: "e11c9480-dd73-4b08-a5fd-452465467805",
      status: 0,
      priority: 0,
      addedAt: "2025-07-03T14:56:48.867Z",
      attachmentsCount: 0,
    },
  },
];

const colors: Record<number, string> = {
  0: "#ffffff",
  1: "#ffd7b5",
  2: "#ffb38a",
  3: "#ff9248",
  4: "#ff6700",
};

function currentColor(priority: number): string {
  return colors[priority] || "#ffffff";
}

function TasksList() {
  const [tasks, setTasks] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  // const [boardId, setBoardId] = useState(null);

  useEffect(() => {
    // fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
    //   headers: {
    //     "api-key": "60d7ad4c-190a-4d97-87b6-38c40e7c1eec",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => setTasks(json.data));
    setTasks(tasksResponse);
  }, []);

  if (tasks === null) {
    return <h1>Загрузка...</h1>;
  }
  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }
  return (
    <div>
      <button
        onClick={() => {
          setSelectedTaskId(null);
        }}>
        Reset selection
      </button>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="task"
              style={{
                backgroundColor: currentColor(task.attributes.priority),
                border:
                  task.id === selectedTaskId
                    ? "2px solid red"
                    : "2px solid transparent",
              }}
              onClick={() => {
                setSelectedTaskId(task.id);
                setSelectedTask(task);
                // setBoardId(task.id);
              }}>
              <div className="task__wrapper">
                <div style={{ display: "flex", gap: "5px" }}>
                  Заголовок:
                  <span
                    style={{
                      textDecorationLine:
                        task.attributes.status === 2 ? "line-through" : "none",
                    }}>
                    {task.attributes.title}
                  </span>
                </div>
                <input
                  onChange={() => {}}
                  type="checkbox"
                  checked={task.attributes.status === 2}
                />
              </div>
              <div>
                Добавлено:{" "}
                {new Date(task.attributes.addedAt).toLocaleDateString()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TasksList;
