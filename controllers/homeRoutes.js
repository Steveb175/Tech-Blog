const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// Home route
router.get("/", async (req, res) => {
  try {
    const dbData = await Post.findAll({
      attributes: ["title"],
    });
    const posts = dbData.map((post) => post.get({ plain: true }));
    console.log("POSTS", posts);

    // Render the home.handlebars template and pass the posts data
    res.render("home", { posts, loggedIn: req.session.loggedIn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

// Dashboard route
router.get("/dashboard", withAuth, async (req, res) => {
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

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Signup route
router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
