const router = require("express").Router();
const dashboardRoutes = require("./dashboardRoutes");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
