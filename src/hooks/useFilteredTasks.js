import { useMemo } from "react";
/**
 * A custom hook to filter tasks based on status and search.
 *
 * @param {Array} tasks - List of tasks to be filtered.
 * @param {string} filter - Filter criteria.
 * @param {string} searchTerm - Search term to match against task titles and descriptions.
 *
 * @returns {Array} - A memoized array of filtered tasks.
 */
const useFilteredTasks = (tasks, filter, searchTerm) =>
  useMemo(() => {
    let filteredTasks = tasks;

    if (filter === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      filteredTasks = filteredTasks.filter((task) => !task.completed);
    }

    if (searchTerm) {
      filteredTasks = filteredTasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredTasks;
  }, [tasks, filter, searchTerm]);

export default useFilteredTasks;
