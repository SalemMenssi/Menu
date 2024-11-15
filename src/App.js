import "./App.css";
import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorie/:id" element={<Categories />} />
    </Routes>
  );
}

export default App;
