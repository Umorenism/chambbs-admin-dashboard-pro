import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./static/Header";
import Sidebar from "./static/Sidebar";
import Content from "./static/Content";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Content />
    </Router>
  );
};

export default App;
