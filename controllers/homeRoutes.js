const router = require("express").Router();
const { Post } = require("../models");

// Dashboard route
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/dashboard", async (req, res) => {
  try {
    const dbData = await Post.findAll({
      attributes: ["title"],
    });
    const posts = dbData.map((post) => post.get({ plain: true }));
    console.log(posts);

    // Render the dashboard.handlebars template and pass the posts data
    res.render("dashboard", { posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
module.exports = router;
