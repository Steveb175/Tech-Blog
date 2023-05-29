const router = require("express").Router();
const { Post } = require("../../models");
// Dashboard route
router.get("/", async (req, res) => {
  try {
    const dbData = await Post.findAll({
      attributes: ["title"],
    });
    const posts = dbData.map((posts) => posts.get({ plain: true }));
    console.log(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

module.exports = router;
