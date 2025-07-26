function moverBoton() {
  const zona = document.getElementById('zona-segura');
  const zonaRect = zona.getBoundingClientRect();

  const rangeX = zonaRect.width - noButton.offsetWidth;
  const rangeY = zonaRect.height - noButton.offsetHeight;

  const newX = Math.random() * rangeX;
  const newY = Math.random() * rangeY;

  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
}
