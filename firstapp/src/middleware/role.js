const checkRole = (roles) => {
    return (req, res, next) => {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ error: "Access denied - Insufficient permissions" });
      }
      next();
    };
  };
  
  module.exports = checkRole;
  