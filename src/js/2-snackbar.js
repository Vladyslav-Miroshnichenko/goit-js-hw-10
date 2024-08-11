import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const btn = document.querySelector('[type=submit]');

const onSubmit = event => {
  event.preventDefault();
  const state = document.querySelector('input[name="state"]:checked').value;
  const delay = parseInt(document.querySelector('input[name="delay"]').value);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.success({
        position: 'topCenter',
        message: `✅Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        position: 'topCenter',
        message: `❌Rejected promise in ${delay}ms`,
      });
    });
};
form.addEventListener('submit', onSubmit);
