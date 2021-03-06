import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Chats from "./pages/chats/index";
import ChatScreen from "./pages/chat-screen";
import NotFound from "./pages/not-found";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/chat/:person" element={<ChatScreen />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
