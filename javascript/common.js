function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active');
  });
}

function setupHeroButton() {
  const ctaButton = document.getElementById('ctaButton');
  if (ctaButton) ctaButton.addEventListener('click', () => window.location.href = 'contact.html');
}

function setupSearch() {
  const searchBox = document.getElementById('searchBox');
  if (!searchBox) return;
  searchBox.addEventListener('input', () => {
    const filter = searchBox.value.toLowerCase().trim();
    document.querySelectorAll('.searchable').forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none';
    });
  });
}

function initServicesInteractions() {
  document.querySelectorAll('.service-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => card.classList.toggle('selected'));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter') card.classList.toggle('selected');
    });
  });
}

function initPortfolioFilters() {
  const filterSelect = document.getElementById('projectFilter');
  if (!filterSelect) return;
  filterSelect.addEventListener('change', event => {
    const activeFilter = event.target.value;
    document.querySelectorAll('.project-item').forEach(card => {
      const cardStatus = card.getAttribute('data-status');
      card.style.display = activeFilter === 'all' || cardStatus === activeFilter ? '' : 'none';
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeLightbox = document.getElementById('closeLightbox');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.gallery-img').forEach(image => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt;
    });
  });

  if (closeLightbox) closeLightbox.addEventListener('click', () => lightbox.style.display = 'none');
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.style.display = 'none';
  });
}

function renderDynamicBlogArticles() {
  const container = document.getElementById('dynamicArticles');
  if (!container) return;
  const articles = [
    { title: 'The Future of AI in Tech Industries', date: 'June 15, 2026', excerpt: 'How automation and intelligent systems are shaping modern business operations.' },
    { title: 'Clean Code for Business Websites', date: 'May 28, 2026', excerpt: 'Simple structure, semantic HTML and consistent styling improve maintainability.' },
    { title: 'Why Small Businesses Need Cybersecurity', date: 'May 10, 2026', excerpt: 'Basic security practices help protect customer data and business continuity.' }
  ];
  container.innerHTML = articles.map(article => `
    <article class="blog-card searchable">
      <h3>${article.title}</h3>
      <small>${article.date}</small>
      <p>${article.excerpt}</p>
    </article>
  `).join('');
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setupForm(formId, feedbackId, type) {
  const form = document.getElementById(formId);
  const feedback = document.getElementById(feedbackId);
  if (!form || !feedback) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const requiredFields = Array.from(form.querySelectorAll('[required]'));
    const invalidField = requiredFields.find(field => !field.value.trim());
    const emailField = form.querySelector('input[type="email"]');

    if (invalidField) {
      feedback.textContent = 'Please complete all required fields.';
      feedback.className = 'form-feedback error';
      invalidField.focus();
      return;
    }

    if (emailField && !validateEmail(emailField.value.trim())) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.className = 'form-feedback error';
      emailField.focus();
      return;
    }

    const name = form.querySelector('input[name="name"]').value.trim();
    const subject = encodeURIComponent(type === 'enquiry' ? 'Website Enquiry' : form.querySelector('input[name="subject"]')?.value.trim() || 'Website Contact');
    const body = encodeURIComponent(Array.from(new FormData(form).entries()).map(([key, value]) => `${key}: ${value}`).join('\n'));
    feedback.textContent = `Thank you, ${name}. Your ${type} has been captured successfully. Your email application will open so the message can be sent.`;
    feedback.className = 'form-feedback success';
    window.location.href = `mailto:lakat.echholdings@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  setupHeroButton();
  renderDynamicBlogArticles();
  setupSearch();
  initServicesInteractions();
  initPortfolioFilters();
  initLightbox();
  setupForm('enquiryForm', 'enquiryFeedback', 'enquiry');
  setupForm('contactForm', 'formFeedback', 'message');
});
