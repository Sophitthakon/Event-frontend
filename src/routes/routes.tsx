import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogingPage from "../page/LoginPage";
import { RegisterPage } from "../page/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogingPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
