import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, dispatch }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className={`task-column ${index % 2 === 0 ? "left" : "right"}`}
        >
          <TaskItem task={task} dispatch={dispatch} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
