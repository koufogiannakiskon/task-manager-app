import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import "./styles/global.css";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </TaskProvider>
  );
};

export default App;
