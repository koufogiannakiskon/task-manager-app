import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList.js";

describe("TaskList Component", () => {
  it("renders tasks and handles deletion", () => {
    const mockDispatch = jest.fn();
    const tasks = [
      {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        completed: false,
      },
    ];

    render(<TaskList tasks={tasks} dispatch={mockDispatch} />);

    // Check if tasks are displayed
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    // Simulate delete button click
    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    // Check if dispatch was called with DELETE_TASK
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "DELETE_TASK",
      payload: 1,
    });
  });
});
