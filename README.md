# Revenue Dashboard 📊

<div align="center">
  <img src="frontend/public/chart-icon.svg" alt="Revenue Dashboard Logo" width="150" />
  <h3>Interactive Revenue Visualization Tool</h3>
  <p>A professional full-stack application for analyzing and visualizing product revenue data</p>
</div>

<div align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#%EF%B8%8F-installation">Installation</a> •
  <a href="#-api-endpoints">API</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-license">License</a>
</div>

<hr />

## ✨ Features

- **Interactive Pie Chart Visualization** - Visualize monthly revenue distribution by product
- **Detailed Product Breakdown** - View revenue statistics with amounts and percentages
- **Dynamic Period Filtering** - Switch between available months and years
- **Performance Insights** - Highlight top and bottom performing products
- **Key Performance Metrics** - Total revenue, average revenue, and product count at a glance
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Data Analysis Tools** - Identify trends and make data-driven decisions

## 🛠 Tech Stack

### Frontend
- **React** - Component-based UI library
- **Vite** - Next generation frontend tooling
- **Chart.js & React-Chartjs-2** - For interactive data visualization
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **React Router** - Declarative routing for React
- **Lucide React** - Beautiful & consistent icon set

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - Elegant MongoDB object modeling
- **Cors** - Cross-Origin Resource Sharing
- **Helmet** - Security middleware
- **Dotenv** - Environment variable management

## 📸 Screenshots
### Web -view
![image](https://github.com/user-attachments/assets/23395353-9012-4571-a877-b6047400175e)

### Tablet View
![image](https://github.com/user-attachments/assets/b6683973-df62-4418-84c5-c4eabf0774a2)

### Phone View
![iPhone-13-PRO-MAX-revenue-amber vercel app](https://github.com/user-attachments/assets/2bde705a-ed6a-4f44-a30d-7eb7f98f31ae)

<div align="center">
  <p><i>Screenshots will be added here</i></p>
</div>

## ⚙️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas account)

### Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd revenue-dashboard
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory with the following content:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory (if needed):
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Run the Application**

   Start the backend server:
   ```bash
   cd ../backend
   npm run dev
   ```

   In a new terminal, start the frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:5173 (default Vite port)
   - Backend API: http://localhost:5000

## 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/revenue` | Get all revenue data (with optional filters) |
| `GET` | `/api/revenue/monthly/:month/:year` | Get revenue data for a specific month and year |
| `GET` | `/api/revenue/available-periods` | Get available months and years with data |
| `POST` | `/api/revenue` | Create a new revenue entry |
| `GET` | `/api/revenue/:id` | Get a specific revenue entry |
| `PUT` | `/api/revenue/:id` | Update a revenue entry |
| `DELETE` | `/api/revenue/:id` | Delete a revenue entry |

## 🚀 Deployment

This project is configured for deployment on Vercel:

### Backend Deployment
1. Create a Vercel account and link your GitHub repository
2. Set the following environment variables in Vercel:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: `production`
3. Set the root directory to `/backend` for the API deployment
4. Deploy using the Vercel dashboard or CLI

### Frontend Deployment
1. Set the root directory to `/frontend` for the frontend deployment
2. Add the environment variable:
   - `VITE_API_URL`: Your deployed backend API URL
3. Deploy using the Vercel dashboard or CLI

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact




