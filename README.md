# TO-DO App
This is a to-do list application developed using React Native + Expo for the frontend and Node.js + Express.js for the backend. The app allows users to create, read, update, delete, and mark tasks as completed.

## Prerequisites
Make sure you have the following installed:

- **Docker:** To run the backend and database in containers.
- **Node.js:** To run the frontend locally.
- **npm (or yarn):** To manage frontend dependencies.

## Setting Up the Project

### 1. Backend Setup (Docker)

#### 1.1 Clone the repository
First, clone the project repository to your local machine:

```bash
git clone https://github.com/LorelizDev/todo-app-react-native.git
cd todo-app-react-native
```

#### 1.2 Configure environment variables
Before running the backend, ensure that you have configured your environment variables for the backend in a .env file. For example:

```bash
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

Replace `your_database_name`, `your_database_user`, and `your_database_password` with your actual database credentials.

#### 1.3 Build and Run the Backend with Docker
To build and run the backend and the PostgreSQL database, you will use Docker Compose. This will spin up the backend and database services in containers.

From the project root directory, run:

```bash
docker-compose up --build
```

This will build the images and start the backend and database services. The backend will be available on `http://localhost:3000`.

#### 1.4 Verify the Backend is Running
Once Docker Compose finishes starting the containers, verify that the backend is running by visiting `http://localhost:3000` in your browser or using a tool like Postman.

### 2. Frontend Setup
#### 2.1 Install Frontend Dependencies
Navigate to the frontend directory:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install  # or yarn install if using Yarn
```

#### 2.2 Configure the Frontend
Ensure the frontend is pointing to the correct backend URL (`http://localhost:3000`).

#### 2.3 Run the Frontend Locally
Once the dependencies are installed and the configuration is correct, you can run the frontend locally with the following command:

```bash
npx expo start
```

This will start the development server, and the frontend will be accessible at `http://localhost:8081`.


## Troubleshooting

- **Backend not starting:** If the backend is not starting correctly, check the logs with docker-compose logs for error messages related to database connections or other issues.
- **Frontend not connecting to backend:** Make sure that the frontend's API URL points to the correct backend (either locally or in the Docker container). You can adjust this in the frontend configuration.

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact me:

- Email: loreliz.dev@gmail.com
- GitHub: https://github.com/LorelizDev
- LinkedIn: https://www.linkedin.com/in/silvialorenaacosta/