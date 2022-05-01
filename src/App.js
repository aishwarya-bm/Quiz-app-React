import { RequiresAuth } from "components";
import {
  CategoryLevel,
  Error,
  Home,
  Login,
  Profile,
  Quiz,
  Result,
  Rules,
} from "pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Login />}></Route>
        <Route
          path="/category/:categoryId"
          element={
            <RequiresAuth>
              <CategoryLevel />
            </RequiresAuth>
          }
        ></Route>
        <Route path="/quiz/:quizId" element={<Quiz />}></Route>
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/rules"
          element={
            <RequiresAuth>
              <Rules />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/result"
          element={
            <RequiresAuth>
              <Result />
            </RequiresAuth>
          }
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
