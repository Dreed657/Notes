module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "Unauthorized – No access to the website" });
    }

    next();
}