import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/header";
import './styles/global.css'
import './App.css'
import AddEdit from "./pages/AddEdit/AddEdit";
import View from "./pages/View/View";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/cursos" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
