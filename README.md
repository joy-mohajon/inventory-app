# Inventory Management System

This is a full-stack inventory management system built with a Laravel backend and a React frontend.

## Tech Stack

### Backend

*   **Framework:** Laravel 12
*   **Language:** PHP 8.2
*   **Database:** MySQL
*   **API Authentication:** Laravel Sanctum

### Frontend

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **Data Fetching:** Axios & TanStack Query

## Installation

### Prerequisites

*   PHP >= 8.2
*   Composer
*   Node.js and npm
*   MySQL

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

4.  **Configure your `.env` file:**
    Open `.env` and set the `DB_*` variables to point to your MySQL database.
    ```ini
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=inventory_app
    DB_USERNAME=root
    DB_PASSWORD=
    ```

5.  **Generate application key:**
    ```bash
    php artisan key:generate
    ```

6.  **Run database migrations:**
    ```bash
    php artisan migrate
    ```

7.  **Start the development server:**
    ```bash
    php artisan serve
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
    You may need to create a `.env` file if one does not exist and configure the backend API URL (e.g., `VITE_API_BASE_URL=http://localhost:8000`).

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Running the Project

*   The Laravel backend will be accessible at `http://localhost:8000`.
*   The React frontend will be running on the port specified by Vite (usually `http://localhost:5173`).