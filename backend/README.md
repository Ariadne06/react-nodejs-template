# Backend API

Node.js/Express backend server built with ESM modules.

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
├── migrations/           # Database migrations
├── scripts/              # Utility scripts
├── src/
│   ├── config/
│   │   ├── database.js   # PostgreSQL pool
│   │   └── jwt.js        # JWT helpers
│   ├── middleware/
│   │   ├── auth.js       # authenticate & authorize middleware
│   │   └── validate.js   # express-validator middleware
│   ├── modules/          # Feature modules (model + controller + routes)
│   │   └── example/
│   │       ├── example.model.js
│   │       ├── example.controller.js
│   │       └── example.routes.js
│   ├── app.js            # Express app setup & route registration
│   └── server.js         # Server entry point
├── .env                  # Environment variables
└── package.json          # Dependencies
```

## Adding a New Module

1. Create a folder under `src/modules/<your-module>/`
2. Add three files:
   - `your-module.model.js` — database queries
   - `your-module.controller.js` — business logic
   - `your-module.routes.js` — Express router

3. Register the routes in `src/app.js`:

```js
import yourModuleRoutes from "./modules/your-module/your-module.routes.js";

app.use("/api/your-module", yourModuleRoutes);
```

### Example Module Files

**your-module.model.js**

```js
import { query } from "../../config/database.js";

export const findAll = () => query("SELECT * FROM your_table");
```

**your-module.controller.js**

```js
import * as YourModel from "./your-module.model.js";

export const getAll = async (req, res) => {
  try {
    const { rows } = await YourModel.findAll();
    res.json({ status: "success", data: rows });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
```

**your-module.routes.js**

```js
import express from "express";
import * as YourController from "./your-module.controller.js";
// import { authenticate } from '../../middleware/auth.js';

const router = express.Router();

router.get("/", YourController.getAll);

export default router;
```
