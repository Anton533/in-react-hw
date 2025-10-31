import "./App.css";

const tasksList = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "3 сентября",
    priority: 3,
  },
];

// const tasksList = null;
// const tasksList = [];

function App() {
  if (tasksList === null) {
    return <h1>Загрузка...</h1>;
  }
  if (tasksList.length === 0) {
    return <h1>Задачи отсутствуют</h1>;
  }
  return (
    <>
      <h1>Список дел:</h1>
      <ul>
        {tasksList.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                backgroundColor:
                  task.priority === 0
                    ? "#ffffff"
                    : task.priority === 1
                    ? "#ffd7b5"
                    : task.priority === 2
                    ? "#ffb38a"
                    : task.priority === 3
                    ? "#ff9248"
                    : "#ff6700",
              }}>
              <div className="task__wrapper">
                <div
                  style={{
                    textDecorationLine: task.isDone ? "line-through" : "none",
                  }}>
                  {task.title}
                </div>
                <input type="checkbox" checked={task.isDone} />
              </div>
              <div>Добавлено: {task.addedAt}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
