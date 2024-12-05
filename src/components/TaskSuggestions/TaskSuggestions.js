import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./TaskSuggestions.css";

const TaskSuggestions = ({ onAddTask }) => {
  const [triggerSuggestions, setTriggerSuggestions] = useState(false);

  const {
    data: suggestions,
    loading,
    error,
    refetch,
  } = useFetch(
    triggerSuggestions &&
      "https://675058b969dc1669ec1ab64f.mockapi.io/task_manager/tasks"
  );

  const handleSuggestions = () => {
    setTriggerSuggestions(!triggerSuggestions);
  };

  if (loading) {
    return <p className="loading">Loading suggestions...</p>;
  }

  if (error) {
    return (
      <div className="error">
        <p>Error loading suggestions. Please try again later.</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  return (
    <div className="task-suggestions">
      <h3>Task Suggestions</h3>
      <button className="fetch-suggestions-button" onClick={handleSuggestions}>
        {triggerSuggestions ? "Hide Suggestions" : "Show Suggestions"}
      </button>
      {triggerSuggestions && suggestions && (
        <ul className="suggestions-list">
          {suggestions.map((task) => (
            <li key={task.id} className="suggestion-item">
              <div>
                <p className="task-title">{task.title}</p>
                <p className="task-description">{task.description}</p>
              </div>
              <button
                className="add-task-button"
                onClick={() => onAddTask(task)}
              >
                Add Task
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskSuggestions;
