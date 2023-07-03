// Create Post
const newPostHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#post-title");
  const content = document.querySelector("#post-content");

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/posts");
    } else {
      alert("Failed to create new post");
    }
  }
  console.log("title: ", title, "content: ", content);
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);
