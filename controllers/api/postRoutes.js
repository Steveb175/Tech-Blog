const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

console.log("I AM POSTROUTES");

router.post("/", withAuth, async (req, res) => {
  console.log("I AM POSTING");
  console.log(req.body);

  try {
    const newPost = await Post.create({
      title: req.body.post.title,
      userId: req.session.userId,
      content: req.body.content,
    });

    console.log("I AM NEW POST", newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
