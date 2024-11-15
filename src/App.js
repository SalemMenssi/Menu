import "./App.css";
import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import ItemDetails from "./Components/ItemDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorie/:id" element={<Categories />} />
      <Route path="/categorie/:id/:item" element={<ItemDetails />} />
    </Routes>
  );
}

export default App;
