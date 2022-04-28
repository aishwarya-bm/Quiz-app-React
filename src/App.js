import { Categories } from "components";
import { Home, Login, Profile, Quiz, Result, Rules } from "pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Login />}></Route>
        <Route path="/category/:categoryId" element={<Categories />}></Route>
        <Route path="/quiz/:quizId" element={<Quiz />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
