import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm.js";

describe("TaskForm Component", () => {
  it("adds a task correctly and clears inputs", () => {
    const mockDispatch = jest.fn();
    render(<TaskForm dispatch={mockDispatch} />);

    const titleInput = screen.getByPlaceholderText("Task Title");
    const descriptionInput = screen.getByPlaceholderText("Task Description");
    const submitButton = screen.getByText("Add");

    // Fill inputs and submit
    fireEvent.change(titleInput, { target: { value: "New Task" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Task Description" },
    });
    fireEvent.click(submitButton);

    // Check if dispatch was called with correct payload
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_TASK",
      payload: expect.objectContaining({
        title: "New Task",
        description: "Task Description",
        completed: false,
      }),
    });

    // Ensure inputs are cleared
    expect(titleInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });
});
