import React, { Suspense, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList/TaskList";
import TaskForm from "../components/TaskForm/TaskForm";
import FilterTasks from "../components/FilterTasks/FilterTasks";
import "./HomePage.css";
import TaskSuggestions from "../components/TaskSuggestions/TaskSuggestions";
import useFilteredTasks from "../hooks/useFilteredTasks";

const HomePage = () => {
  const { state, dispatch } = useContext(TaskContext);

  const filteredTasks = useFilteredTasks(state.tasks, state.filter, state.searchTerm); //prettier-ignore

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: Date.now(), completed: false },
    });
  };

  return (
    <div className="homepage">
      <h1>Task Manager</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="task-manager">
          <TaskForm dispatch={dispatch} />
          <FilterTasks />
          <TaskList tasks={filteredTasks} dispatch={dispatch} />
          <TaskSuggestions onAddTask={addTask} />
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;
