import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBooks from "./pages/DeleteBooks";
import Landing from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/book/details/:id" element={<ShowBook />} />
      <Route path="/book/edit/:id" element={<EditBook />} />
      <Route path="/book/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;
