const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(400).json({message: "Vui lòng đăng nhập!" });
      }
      try {
        const data = jwt.verify(token, "manhpham2k1");
        req.username = data.username;
        req.id_role = data.id_role;
        return next();
      } catch {
        return res.status(401).json({message: "Token đã hết hạn!" });
      }
}

const authenticateRefreshToken = (req, res, next) => {
  const token = req.headers.refresh_token;
  if (!token) {
      return res.status(400).json({message: "Vui lòng đăng nhập!" });
    }
    try {
      const data = jwt.verify(token, "manhpham2k1");
      req.username = data.username;
      return next();
    } catch {
      return res.status(401).json({message: "Token đã hết hạn!" });
    }
}

module.exports = {
    authenticate,
    authenticateRefreshToken
}