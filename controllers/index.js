const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const withAuth = require("../utils/auth");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
