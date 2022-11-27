import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";

export const RouterIndex = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
    </Routes>
)