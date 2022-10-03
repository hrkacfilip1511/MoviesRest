import Heading from "./components/Heading/Heading";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies/Movies";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Heading />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies" element={<Movies />} />
      {/* <Route path="/users" element={<Users />} /> */}
    </Routes>
  );
}

export default App;
