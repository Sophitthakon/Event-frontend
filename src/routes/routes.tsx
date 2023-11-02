import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogingPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import HomePage from "../page/HomePage";
import MyEventPage from "../page/MyEventPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogingPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route element={<HomePage />} path="/home/*">
          <Route path="myevent" element={<MyEventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
