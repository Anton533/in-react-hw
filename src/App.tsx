import { useEffect, useState } from "react";
import "./App.css";

// const tasksList = [
//   {
//     id: 1,
//     title: "Купить продукты на неделю",
//     isDone: false,
//     addedAt: "1 сентября",
//     priority: 2,
//   },
//   {
//     id: 2,
//     title: "Полить цветы",
//     isDone: true,
//     addedAt: "2 сентября",
//     priority: 0,
//   },
//   {
//     id: 3,
//     title: "Сходить на тренировку",
//     isDone: false,
//     addedAt: "3 сентября",
//     priority: 1,
//   },
//   {
//     id: 4,
//     title: "Срочно отправить рабочий отчет",
//     isDone: false,
//     addedAt: "4 сентября",
//     priority: 4,
//   },
//   {
//     id: 5,
//     title: "Заплатить за коммунальные услуги",
//     isDone: false,
//     addedAt: "3 сентября",
//     priority: 3,
//   },
// ];

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

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
      headers: {
        "api-key": "60d7ad4c-190a-4d97-87b6-38c40e7c1eec",
      },
    })
      .then((res) => res.json())
      .then((json) => setTasks(json.data));
  }, []);

  if (tasks === null) {
    return <h1>Загрузка...</h1>;
  }
  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }
  return (
    <>
      <h1>Список дел:</h1>
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
              style={{
                backgroundColor: currentColor(task.attributes.priority),
                border:
                  task.id === selectedTaskId
                    ? "2px solid red"
                    : "2px solid transparent",
              }}
              onClick={() => {
                setSelectedTaskId(task.id);
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
                  onClick={() => {
                    // task.attributes.status = 0;
                  }}
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
    </>
  );
}

export default App;
