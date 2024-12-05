import React, { useState } from "react";
import "./TaskForm.css";
import { titleMaxLength } from "../../utils/constants";
import InputField from "../InputField/InputField";

const TaskForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), title, description, completed: false },
      });
      setTitle("");
      setDescription("");
      setError("");
    } else {
      setError("Task title cannot be empty.");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= titleMaxLength) {
      setTitle(value);
      setError("");
    } else {
      setError(`Task title cannot exceed ${titleMaxLength} characters.`);
    }
  };

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-input-group">
          <InputField
            value={title}
            onChange={handleInputChange}
            placeholder="Task Title"
          />
          <InputField
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
          />
        </div>
        <button className="task-submit" type="submit">
          Add
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
};

export default TaskForm;
