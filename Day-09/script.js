const apiUrl = "http://localhost:5000/api/posts";

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Publish and Draft buttons
document.getElementById("publishBtn").addEventListener("click", () => createPost("published"));
document.getElementById("draftBtn").addEventListener("click", () => createPost("draft"));

// Fetch and render posts
async function fetchPosts() {
  try {
    const res = await fetch(apiUrl);
    const posts = await res.json();

    const publishedContainer = document.getElementById("published-posts");
    const draftContainer = document.getElementById("draft-posts");

    publishedContainer.innerHTML = "";
    draftContainer.innerHTML = "";

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>Category:</strong> ${post.category}</p>
        <p>${post.content}</p>
        <p><em>Status: ${post.status}</em></p>
        <button onclick="deletePost('${post._id}')">Delete</button>
        ${post.status === "draft" ? `<button onclick="publishDraft('${post._id}')">Publish</button>` : ""}
      `;

      if (post.status === "published") {
        publishedContainer.appendChild(card);
      } else {
        draftContainer.appendChild(card);
      }
    });
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
}

// Create new post
async function createPost(status) {
  const title = document.getElementById("title").value.trim();
  const category = document.getElementById("category").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !category || !content) {
    alert("All fields are required!");
    return;
  }

  try {
    await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category, content, status })
    });

    // Clear form
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("content").value = "";

    fetchPosts();
  } catch (err) {
    console.error("Error creating post:", err);
  }
}

// Delete post
async function deletePost(id) {
  try {
    await fetch(`${apiUrl}?id=${id}`, { method: "DELETE" });
    fetchPosts();
  } catch (err) {
    console.error("Error deleting post:", err);
  }
}

// Publish draft
async function publishDraft(id) {
  try {
    await fetch(`${apiUrl}?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "published" })
    });
    fetchPosts();
  } catch (err) {
    console.error("Error publishing draft:", err);
  }
}

// Initial load
fetchPosts();
