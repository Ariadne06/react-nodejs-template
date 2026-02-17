# Modules

This folder contains feature-based modules. Each module should have its own folder containing:

- `module.model.js` - Data model/schema
- `module.controller.js` - Business logic
- `module.routes.js` - API routes

## Example Structure

```
modules/
├── index.js          # Main router combining all module routes
├── user/
│   ├── user.model.js
│   ├── user.controller.js
│   └── user.routes.js
└── auth/
    ├── auth.controller.js
    └── auth.routes.js
```

## Creating a New Module

1. Create a new folder with your module name
2. Add the necessary files (model, controller, routes)
3. Import and register the routes in `modules/index.js`

### Example Module: User

**user/user.model.js**

```javascript
// Define data model or database schema
const User = {
  // Model definition
};

module.exports = User;
```

**user/user.controller.js**

```javascript
// Business logic for user operations
exports.getAllUsers = async (req, res) => {
  try {
    res.json({ users: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

**user/user.routes.js**

```javascript
const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);

module.exports = router;
```

**modules/index.js**

```javascript
const express = require("express");
const router = express.Router();
const userRoutes = require("./user/user.routes");

router.use("/users", userRoutes);

module.exports = router;
```
