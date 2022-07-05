function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log('sxsa');

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  allbtn: document.querySelectorAll('button'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.start.addEventListener('click', chengColor);
refs.stop.addEventListener('click', chengColor);
toggleOnOffButton([refs.stop]);

function chengColor() {
  toggleOnOffButton(refs.allbtn);

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    return;
  }
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  return;
}

function toggleOnOffButton(btn) {
  const arr = [...btn];
  arr.map(el => {
    if (!el.hasAttribute('disabled')) {
      console.log('on att', el);
      el.setAttribute('disabled', 'disabled');
    } else {
      el.removeAttribute('disabled');
    }
  });
}
