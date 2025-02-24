import React, { useState } from "react";
import { createCompany } from "../API/companyApi";

const AddCompany = () => {
    const [company, setCompany] = useState({
        name: "",
        exchange: "",
        ticker: "",
        isin: "",
        website: "",
    });

    const handleChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCompany(company);
            alert("Company added successfully!");
            setCompany({ name: "", exchange: "", ticker: "", isin: "", website: "" });
        } catch (error) {
            alert("Error adding company!");
            console.error(error);
        }
    };

    return (
        <div className="add-company">
            <h2>Add New Company</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Company Name" value={company.name} onChange={handleChange} required />
                <input type="text" name="exchange" placeholder="Exchange" value={company.exchange} onChange={handleChange} required />
                <input type="text" name="ticker" placeholder="Stock Ticker" value={company.ticker} onChange={handleChange} required />
                <input type="text" name="isin" placeholder="ISIN" value={company.isin} onChange={handleChange} required />
                <input type="text" name="website" placeholder="Website URL (optional)" value={company.website} onChange={handleChange} />
                <button type="submit">Add Company</button>
            </form>
        </div>
    );
};

export default AddCompany;
