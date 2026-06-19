
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

const sampleArticles = [
  {
    title: "The Future of AI in Tech Industries",
    date: "June 15, 2026",
    excerpt: "Discover how automated systems are shaping the modern corporate workspace.",
    link: "#"
  },
  {
    title: "Mastering Clean Code: Structural Tips",
    date: "May 28, 2026",
    excerpt: "Simple conventions and semantic habits to improve your web architecture.",
    link: "#"
  }
];

function renderBlogPosts() {
  const introSection = document.querySelector('.blog-intro');
  if (!introSection) return;

  const postContainer = document.createElement('div');
  postContainer.className = 'blog-posts-container';


  sampleArticles.forEach(post => {
    const articleMarkup = `
      <article class="blog-card">
        <h3>${post.title}</h3>
        <small class="post-date">${post.date}</small>
        <p>${post.excerpt}</p>
        <a href="${post.link}" class="read-more">Read Full Article</a>
      </article>
    `;
    postContainer.innerHTML += articleMarkup;
  });

  introSection.appendChild(postContainer);
}

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  renderBlogPosts();
});
