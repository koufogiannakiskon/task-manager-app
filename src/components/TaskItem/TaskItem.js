import React, { memo, useCallback, useState } from "react";
import "./TaskItem.css";
import { descriptionMaxLength, titleMaxLength } from "../../utils/constants";

const TaskItem = memo(({ task, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description || ""
  );
  const [error, setError] = useState("");

  const toggleComplete = useCallback(() => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...task, completed: !task.completed },
    });
  }, [task, dispatch]);

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  const saveEdit = () => {
    if (editTitle.trim() && editDescription.length <= descriptionMaxLength) {
      dispatch({
        type: "UPDATE_TASK",
        payload: { ...task, title: editTitle, description: editDescription },
      });
      setIsEditing(false);
      setError("");
    } else {
      setError(
        editTitle.trim()
          ? `Task description cannot exceed ${descriptionMaxLength} characters.`
          : "Task title cannot be empty."
      );
    }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= titleMaxLength) {
      setEditTitle(value);
      setError("");
    } else {
      setError(`Task title cannot exceed ${titleMaxLength} characters.`);
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= descriptionMaxLength) {
      setEditDescription(value);
      setError("");
    } else {
      setError(
        `Task description cannot exceed ${descriptionMaxLength} characters.`
      );
    }
  };

  return (
    <div className="task-item">
      <div>
        {isEditing ? (
          <div className="task-edit">
            <input
              className="edit-input"
              type="text"
              value={editTitle}
              onChange={handleTitleChange}
            />
            <textarea
              className="edit-input"
              value={editDescription}
              onChange={handleDescriptionChange}
              placeholder="Task description"
            ></textarea>
            {error && <p className="error-message">{error}</p>}
          </div>
        ) : (
          <div className={`task-title ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={toggleComplete}
            />
            <div>
              <p>{task.title}</p>
              {task.description && (
                <p className="task-description">{task.description}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <button className="save-button" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
});

export default TaskItem;
