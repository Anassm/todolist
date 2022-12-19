import { Route, Routes } from "react-router-dom";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<ListPage />} />
        </Routes>
    );
}