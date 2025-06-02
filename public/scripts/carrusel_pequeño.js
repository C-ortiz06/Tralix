const btnIzq = document.querySelector('.btn-carrusel.izquierda');
const btnDer = document.querySelector('.btn-carrusel.derecha');
const carruselTr = document.getElementById('tr');
const cards = document.querySelectorAll('.carru');

let currentPosition = 0;

const cardsToShow = 6;
const cardsToMove = 6; 

const cardStyle = getComputedStyle(cards[0]);
const cardWidth = cards[0].offsetWidth;
const cardMarginLeft = parseInt(cardStyle.marginLeft);
const cardMarginRight = parseInt(cardStyle.marginRight);
const totalCardWidth = cardWidth + cardMarginLeft + cardMarginRight;

const extraSpace = 1;

const moveAmount = (totalCardWidth * cardsToMove) + extraSpace;

const maxPosition = -((cards.length - cardsToShow) * totalCardWidth + extraSpace);

btnDer.addEventListener('click', () => {
  currentPosition -= moveAmount;
  if (currentPosition < maxPosition) {
    currentPosition = maxPosition;
  }
  carruselTr.style.transform = `translateX(${currentPosition}px)`;
  updateArrowVisibility(); 
});

btnIzq.addEventListener('click', () => {
  currentPosition += moveAmount;
  if (currentPosition > 0) {
    currentPosition = 0;
  }
  carruselTr.style.transform = `translateX(${currentPosition}px)`;
  updateArrowVisibility(); 
});

function updateArrowVisibility() {
  btnIzq.style.display = currentPosition === 0 ? 'none' : 'block';
}

updateArrowVisibility();

/////////////////////////////////////////////////////////////////////////////////
  document.querySelectorAll('.score-circle').forEach(circle => {
    const score = parseFloat(circle.dataset.score);
    const percentage = (score / 10) * 100;
    const bar = circle.querySelector('.circle-bar');

    let color = '#0f0';
    if (score < 7) color = '#ff0'; 
    if (score < 5) color = '#f00'; 

    bar.setAttribute('stroke', color);
    bar.setAttribute('stroke-dasharray', `${percentage}, 100`);
  });
