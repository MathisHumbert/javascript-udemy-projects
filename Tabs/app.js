const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const active = e.target.dataset.id;
  if (active) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    const element = document.getElementById(active);
    element.classList.add('active');
  }
});
