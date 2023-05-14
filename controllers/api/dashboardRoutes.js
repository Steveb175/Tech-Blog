const router = require("express").Router();
const { Post } = require("../../models");
// Dashboard route
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render("dashboard", { posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

module.exports = router;
