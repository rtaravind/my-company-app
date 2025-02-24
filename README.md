# Compamy API Client React + Vite

The Company API Client is a simple web application built using React + Vite that allows users to interact with the Company API through a user-friendly interface. This client provides an easy way to create and retrieve company records from the backend API, displaying the results in a clean and structured format within the browser.

# Running the Frontend (React + Vite)

1. Navigate to the frontend folder:
   
CD frontend

2. npm install

3. Add the backend API URL  in API --> companyAPI.js

like const API_BASE_URL = "https://localhost:7047/api/company";

4. Start the frontend application

   npm run dev

5. The frontend will be available at: http://localhost:<your port>

Note : update the Enable CORS in Your Backend (If Using ASP.NET Core) Update the frontend URL in Program.cs 

something like below,

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:<your port>")  // Allow frontend URL
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});
   
