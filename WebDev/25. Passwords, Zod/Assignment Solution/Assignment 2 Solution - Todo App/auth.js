const jwt = require("jsonwebtoken");

const JWT_SECRET = "pikachu";

function auth(req, res, next) {
    const token = req.headers.authorization;

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        req.userId = decodedData.id;

        next();
    } catch (error) {
        res.status(403).json({
            message: "Invalid Token!",
        });
    }
}

module.exports = {
    auth,
    JWT_SECRET
}