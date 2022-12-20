import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "../pages/homepage";
import ListPage from "../pages/listpage";
import AboutPage from "../pages/aboutpage";
import ContactPage from "../pages/contactpage";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}
