function TasckItem({ taskId, taskAttributes, onTaskSelected, isSelected }) {
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

  return (
    <li
      key={taskId}
      className="task"
      style={{
        backgroundColor: currentColor(taskAttributes.priority),
        border: isSelected ? "2px solid red" : "2px solid transparent",
      }}
      onClick={() => {
        onTaskSelected(taskId, taskId);
      }}>
      <div className="task__wrapper">
        <div style={{ display: "flex", gap: "5px" }}>
          Заголовок:
          <span
            style={{
              textDecorationLine:
                taskAttributes.status === 2 ? "line-through" : "none",
            }}>
            {taskAttributes.title}
          </span>
        </div>
        <input
          onChange={() => {}}
          type="checkbox"
          checked={taskAttributes.status === 2}
        />
      </div>
      <div>
        Добавлено: {new Date(taskAttributes.addedAt).toLocaleDateString()}
      </div>
    </li>
  );
}

export default TasckItem;
