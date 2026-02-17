# Backend API

Node.js/Express backend server for the application.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

3. Update environment variables in `.env`

## Running

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## Project Structure

```
backend/
├── migrations/       # Database migrations
├── scripts/          # Utility scripts
├── src/
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Custom middleware
│   ├── models/       # Data models
│   ├── routes/       # API routes
│   ├── app.js        # Express app setup
│   └── server.js     # Server entry point
├── .env              # Environment variables
└── package.json      # Dependencies
```
