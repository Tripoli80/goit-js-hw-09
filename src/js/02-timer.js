import '../sass/index.scss';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import flatpickr from 'flatpickr';
let endData = new Date();
// Дополнительный импорт стилей

const refs = {
  // dateEnd: document.querySelector('button[data-start]'),
  btn: document.querySelector('button'),

  d: document.querySelector('span[data-days]'),
  h: document.querySelector('span[data-hours]'),
  i: document.querySelector('span[data-minutes]'),
  s: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    endData = selectedDates[0];
    checkDate();
  },
};

flatpickr('#datetime-picker', options);
toggleOnOffButton([refs.btn]);

refs.btn.addEventListener('click', startTimer);
function startTimer() {
  toggleOnOffButton([refs.btn]);
  const msEnd = endData.getTime();
  setInterval(() => {
    const time = getNormalTime(msEnd - new Date().getTime());
    inner(time);
  }, 1000);
}

function getNormalTime(t) {
  const result = {
    d: Math.floor(t / (1000 * 60 * 60 * 24)),
    h: Math.floor((t / (1000 * 60 * 60)) % 24),
    i: Math.floor((t / (1000 * 60)) % 60),
    s: Math.floor((t / 1000) % 60),
  };
  return result;
}
function toggleOnOffButton(btn, off) {
  const arr = [...btn];

  if (off === true) {
    arr.map(el => {
      el.setAttribute('disabled', 'disabled');
    });
    return;
  }
  if (off === false) {
    arr.map(el => {
      el.removeAttribute('disabled');
    });
    return;
  }
  arr.map(el => {
    if (!el.hasAttribute('disabled')) {
      el.setAttribute('disabled', 'disabled');
    } else {
      el.removeAttribute('disabled');
    }
  });
}
function checkDate() {
  if (endData.getTime() < new Date().getTime()) {
    Notify.failure('Please choose a date in the future');
    toggleOnOffButton([refs.btn], true);
    return;
  }
  toggleOnOffButton([refs.btn], false);
}

function formatingTime(a) {
  return a.toString().padStart(2, '0');
}

function inner({ d, h, i, s }) {
  refs.d.textContent = formatingTime(d);
  refs.h.textContent = formatingTime(h);
  refs.i.textContent = formatingTime(i);
  refs.s.textContent = formatingTime(s);
}
