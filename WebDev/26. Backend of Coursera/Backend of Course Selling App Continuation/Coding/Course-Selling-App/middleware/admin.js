const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

        req.adminId = decoded.id;

        next();
    } catch (error) {
        return res.status(403).json({
            message: "You are not Signed in!", 
        });
    }
}

module.exports = {
    adminMiddleware, 
};
