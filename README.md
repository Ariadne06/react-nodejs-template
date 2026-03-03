# React + Node.js Template

A full-stack application template with React frontend and Node.js/Express backend.

## Project Structure

```
react_nodejs_template/
├── backend/          # Node.js/Express API server
│   ├── migrations/   # Database migrations
│   ├── scripts/      # Utility scripts
│   ├── src/
│   │   ├── config/   # Configuration files
│   │   ├── controllers/ # Route controllers
│   │   ├── middleware/  # Custom middleware
│   │   ├── models/      # Data models
│   │   ├── routes/      # API routes
│   │   ├── app.js       # Express app setup
│   │   └── server.js    # Server entry point
│   ├── .env
│   └── package.json
│
├── frontend/         # React + TypeScript + Vite application
│   ├── public/       # Static assets
│   ├── src/
│   │   ├── assets/   # Images, fonts, etc.
│   │   ├── config/   # Configuration
│   │   ├── layouts/  # Layout components
│   │   ├── pages/    # Page components
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── .gitignore
├── API.md            # API documentation
└── README.md
```

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react_nodejs_template
```

2. Install backend dependencies:

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
cp .env.example .env
# Edit .env with your configuration
```

### Running the Application

1. Start the backend server:

```bash
cd backend
npm run dev
```

The backend will run on http://localhost:5000

2. In a new terminal, start the frontend:

```bash
cd frontend
npm run dev
```

The frontend will run on http://localhost:5173

## Development

### Backend

- `npm start` - Run in production mode
- `npm run dev` - Run with nodemon (auto-restart on changes)

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Documentation

See [API.md](API.md) for detailed API documentation.

## Tech Stack

### Backend

- Node.js (ES Modules)
- Express.js
- PostgreSQL (pg)
- JWT Authentication
- bcryptjs
- Helmet (security)
- CORS
- Morgan (logging)
- express-validator
- Rate limiting

### Frontend

- React 18.3
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui (configured)
- React Router DOM
- Axios
- Lucide Icons
- ESLint

## License

ISC
