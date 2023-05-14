const express = require("express");
const router = express.Router();
const { Post } = require("../../models");

// Dashboard route
router.get("/dashboard", async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.render("dashboard", { posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

module.exports = router;
