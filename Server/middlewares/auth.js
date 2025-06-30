const jwt = require('jsonwebtoken');
const User = require('../models/user');

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token found' });
  }
  
  // Using hardcoded secret key
  jwt.verify(token, 'mysecretkey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    
    req.user = { _id: decoded.id }; // Attach user ID to req object
    next();
  });
};

module.exports = verifyToken;
