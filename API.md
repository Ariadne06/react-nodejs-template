# API Documentation

Base URL: `http://localhost:5000/api`

## Endpoints

### Health Check

Check if the server is running.

**GET** `/health`

**Response:**

```json
{
  "status": "success",
  "message": "Server is running",
  "timestamp": "2026-02-18T10:00:00.000Z"
}
```

### API Info

Get API information.

**GET** `/api`

**Response:**

```json
{
  "status": "success",
  "message": "API is working",
  "version": "1.0.0"
}
```

---

## Adding New Routes

1. Create a new route file in `backend/src/routes/`
2. Import and use it in `backend/src/routes/index.js`

Example:

```javascript
// backend/src/routes/userRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ users: [] });
});

router.post("/", (req, res) => {
  // Create user
  res.status(201).json({ message: "User created" });
});

module.exports = router;
```

```javascript
// backend/src/routes/index.js
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
```

## Error Responses

All error responses follow this format:

```json
{
  "status": "error",
  "message": "Error description"
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Authentication

To be implemented. Recommended approach:

1. Use JWT tokens
2. Store in httpOnly cookies or Authorization header
3. Verify with middleware on protected routes
