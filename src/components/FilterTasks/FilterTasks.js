import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./FilterTasks.css";
import useDebounce from "../../hooks/useDebounce";

const FilterTasks = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleFilterChange = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_TERM", payload: debouncedSearchTerm });
  }, [debouncedSearchTerm, dispatch]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className="filter-tasks">
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks by title or description"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <div>
        <button
          className={state.filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={state.filter === "completed" ? "active" : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
        <button
          className={state.filter === "pending" ? "active" : ""}
          onClick={() => handleFilterChange("pending")}
        >
          Pending
        </button>
      </div>
    </div>
  );
};

export default FilterTasks;
