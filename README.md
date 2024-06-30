
This repository contains a fullstack Form built for performing CRUD (Create, Read, Update, Delete) operations. It includes both frontend and backend components integrated with MongoDB for data storage.

### Prerequisites

Before running the application, ensure you have the following installed and set up:

- Node.js and npm (Node Package Manager)
- MongoDB (running locally or accessible via URI)
- .env file configured with your MongoDB URI (`mongo_uri`)

### Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/Mugisha-Samuella/CRUD-Form-Details.git

   ```

2. **Install Dependencies**

   ```
   npm install
   cd view
   npm install
   ```

   - The first `npm install` installs backend dependencies.
   - `cd view` changes directory to the frontend folder.
   - The second `npm install` installs frontend dependencies.

### Running the Application

#### Frontend

1. **Navigate to the Frontend Directory**

   ```
   cd view
   ```

2. **Run Development Server**

   ```
   npm run dev
   ```

   - This command starts the Vue.js development server.
   - Access the frontend at `http://localhost:5173` in your browser.

#### Backend (Node.js + Express)

1. **Return to Parent Directory**

   ```
   cd ..
   ```

2. **Start the Backend Server**

   ```
   npm run dev
   ```

   - This command starts the Node.js backend server using nodemon for automatic reloading.
   - Ensure your `.env` file includes `mongo_uri` for MongoDB connection.

### Usage

Once the application is running:

- Access the frontend at `http://localhost:5173` to interact with the user interface.
- Perform CRUD operations:
  - **Create**: Add new data through forms provided.
  - **Read**: View saved data directly on the frontend.
  - **Update**: Modify existing data using provided update functionalities.
  - **Delete**: Remove data entries as needed.

### Additional Information

- The application structure is designed to separate concerns between frontend (React.js) and backend (Node.js + Express), promoting scalability and maintainability.
- Ensure MongoDB is correctly configured and accessible to the backend via the provided `.env` configuration.

### Contributing

Feel free to contribute to the project by submitting issues or pull requests. Follow the established coding conventions and documentation guidelines.

### License

This project is licensed under the [MIT License](LICENSE).

---
