// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItemForm from "./components/AddItemForm";
import ViewItems from "./components/ViewItems";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">
          Item Manager
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/add">
            Add Item
          </Link>
          <Link className="nav-link" to="/view">
            View Items
          </Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AddItemForm />} />
          <Route path="/view" element={<ViewItems />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
