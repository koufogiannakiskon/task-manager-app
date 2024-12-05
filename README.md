# Task Manager App

A Task Manager application built with React. The app allows users to manage tasks efficiently by adding, editing, deleting, filtering, and searching tasks. It also includes fake API integration for task suggestions.

---

## Features

- Add, edit, delete tasks.
- Mark tasks as complete or incomplete.
- Filter tasks by status: All, Completed, Pending.
- Search tasks by title or description.
- Fetch task suggestions from a fake API.
- Efficient state management using React Context and Hooks.
- Error handling for API integration.

---

## Setup and Running the Project Locally

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js] (v14 or later)
- npm (comes with Node.js)

### Steps to Run

git clone <repository-url>
cd task-manager-app
npm install
npm start
npm test

## Tools & Libraries

- **React**: UI development.
- **React Context & Hooks**: State management.
- **MockAPI**: External API for task suggestions.
- **Custom Hooks**: `useFetch`, `useDebounce`, `useFilteredTasks` for reusable logic.
- **Jest & React Testing Library**: Testing tools.

Future work includes expanding unit test coverage for core functionality.
