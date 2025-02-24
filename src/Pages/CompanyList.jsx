import React, { useEffect, useState } from "react";
import { getCompanies } from "../API/companyApi";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const data = await getCompanies();
            setCompanies(data);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };

    return (
        <div className="company-list">
            <h2>Company List</h2>
            <table className="company-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Exchange</th>
                        <th>Ticker</th>
                        <th>ISIN</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.exchange}</td>
                            <td>{company.ticker}</td>
                            <td>{company.isin}</td>
                            <td>
                                {company.website ? (
                                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                                        Visit
                                    </a>
                                ) : (
                                    "N/A"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyList;
