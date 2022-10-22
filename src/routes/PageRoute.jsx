import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const PageRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
