import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './TaskContext';  // Import the TaskProvider
import Home from './Home';
import NewPage from './NewPage';

function App() {
  return (
    <TaskProvider>  {/* Wrap your app with TaskProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtask" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;

