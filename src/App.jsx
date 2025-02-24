import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompanyList from "./pages/CompanyList";
import AddCompany from "./pages/AddCompany";

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navigation">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/add" className="nav-link">Add Company</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<CompanyList />} />
                    <Route path="/add" element={<AddCompany />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
