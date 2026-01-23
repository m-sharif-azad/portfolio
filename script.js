window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const screenBottom = window.innerHeight / 1.2;
  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if(elTop < screenBottom) el.classList.add('show');
  });
});
