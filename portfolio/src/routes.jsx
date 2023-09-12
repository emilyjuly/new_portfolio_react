import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./pages/Projects"
import Certificates from "./pages/Certificates"
import Courses from "./pages/Courses"

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
