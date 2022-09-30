import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage'
import ProjectsPage from './components/pages/ProjectsPage'
import BlogPage from './components/pages/BlogPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/follow-me' element={<BlogPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
