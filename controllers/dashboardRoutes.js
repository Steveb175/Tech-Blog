const router = require("express").Router();
const { Post } = require("../models");

// Dashboard route
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

module.exports = router;
