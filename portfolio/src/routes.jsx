import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import ContactMe from "./pages/ContactMe"
import Help4You from "./pages/Help4you/index.jsx";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/help-4-you" element={<Help4You />} />
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
