import jwt from 'jsonwebtoken'; // Ensure you import jwt if you're using it

const ensureAuthentication = (req, res, next) => {
    const auth = req.header('authorization');
    if (!auth) {
        return res.status(401).json({ msg: "Unauthorized, JWT token is required" });
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized, JWT token is wrong or expired" });
    }
};

export default ensureAuthentication;
