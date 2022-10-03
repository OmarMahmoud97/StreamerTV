import "./styles/partials/Resets.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import NavBar from "./components/Header/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="app__container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videos/:videoId" />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
