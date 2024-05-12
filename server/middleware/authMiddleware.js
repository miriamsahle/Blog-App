// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel"); // Import the User model
// const HttpError = require("../models/errorModel");

// const authMiddleware = async (req, res, next) => {
//   const Authorization = req.headers.Authorization || req.headers.authorization;

//   if (Authorization && Authorization.startsWith("Bearer")) {
//     const token = Authorization.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//       if (err) {
//         return next(new HttpError("Unauthorized. Invalid token.", 403));
//       }

//       try {
//         const user = await User.findById(decoded.id).select("-password"); // Exclude password from the results
//         if (!user) {
//           return next(new HttpError("Unauthorized. User not found.", 404));
//         }
//         req.user = user; // Attach the full user object
//         next();
//       } catch (error) {
//         return next(new HttpError("Authorization failed.", 500));
//       }
//     });
//   } else {
//     return next(new HttpError("Unauthorized. No token.", 401));
//   }
// };

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");
const HttpError = require("../models/errorModel");

const authMiddleware = async (req, res, next) => {
  const Authorization = req.headers.Authorization || req.headers.authorization;

  if (Authorization && Authorization.startsWith("Bearer")) {
    const token = Authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
      if (err) {
        return next(new HttpError("Unauthorized. Invalid token.", 403));
      }

      req.user = info;
      next();
    });
  } else {
    return next(new HttpError("Unauthorized. No token.", 402));
  }
};

module.exports = authMiddleware;
