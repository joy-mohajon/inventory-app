# Inventory Management System

This is a full-stack inventory management system built with a Laravel backend and a React frontend.

## Tech Stack

### Backend

*   **Framework:** Laravel 12
*   **Language:** PHP 8.2
*   **Database:** SQLite (by default)
*   **API Authentication:** Laravel Sanctum
*   **Development Environment:** Laravel Sail (Docker)

### Frontend

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **Data Fetching:** Axios & TanStack Query

## Installation

### Prerequisites

*   Docker Desktop
*   Node.js and npm

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/inventory-app.git
    cd inventory-app/backend
    ```

2.  **Install dependencies:**
    ```bash
    composer install
    ```

3.  **Set up environment file:**
    ```bash
    cp .env.example .env
    ```

4.  **Start the development server:**
    ```bash
    ./vendor/bin/sail up
    ```

5.  **Generate application key:**
    ```bash
    ./vendor/bin/sail artisan key:generate
    ```

6.  **Run database migrations:**
    ```bash
    ./vendor/bin/sail artisan migrate
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment file:**
    ```bash
    cp .env.example .env
    ```
    *Note: You may need to create a `.env.example` if one does not exist and configure the backend API URL.*

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Running the Project

*   The Laravel backend will be accessible at `http://localhost`.
*   The React frontend will be running on the port specified by Vite (usually `http://localhost:5173`).
