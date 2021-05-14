const grid = document.getElementById('js-grid');
const shadow = grid.querySelector('.shadow');

document.addEventListener('mousemove', e => {
  const rect = grid.getBoundingClientRect();

  window.requestAnimationFrame(() => {
    shadow.style.left = `${e.clientX - rect.left}px`;
    shadow.style.top = `${e.clientY - rect.top}px`;
  });
});