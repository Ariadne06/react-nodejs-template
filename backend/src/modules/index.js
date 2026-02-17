const express = require('express');
const router = express.Router();

// Import module routes
const exampleRoutes = require('./example/example.routes');
// const userRoutes = require('./user/user.routes');
// const authRoutes = require('./auth/auth.routes');

// Use module routes
router.use('/examples', exampleRoutes);
// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

// API info route
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is working',
    version: '1.0.0'
  });
});

module.exports = router;
