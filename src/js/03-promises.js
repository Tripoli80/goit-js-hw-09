import '../sass/index.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.getElementsByName('form'),
  delay: document.getElementsByName('delay'),
  step: document.getElementsByName('step'),
  amount: document.getElementsByName('amount'),
  btn: document.querySelector('button'),
};

refs.btn.addEventListener('click', e => {
  e.preventDefault();

  const delay = Number(refs.delay[0].value);
  const step = Number(refs.step[0].value);
  const amount = Number(refs.amount[0].value);

  console.log(`start -  delay: ${delay}, step: ${step}, amount: ${amount}`);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i, i * step + delay);
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(a => {
      console.log(a);
      Notify.success(a);
    })
    .catch(err => {
      console.log(err);
      Notify.failure(err);
    });
}
