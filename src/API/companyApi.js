import axios from "axios";

const API_BASE_URL = "https://localhost:7047/api/company";

// Fetch all companies
export const getCompanies = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching companies:", error.response?.data || error.message);
        throw error;
    }
};

// Fetch company by ID
export const getCompanyById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching company with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};

//Create a new company
export const createCompany = async (company) => {
    try {
        const response = await axios.post(API_BASE_URL, company, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding company:", error.response?.data || error.message);
        throw error;
    }
};
