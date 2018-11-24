document.querySelector('#logout').addEventListener('click', event => {
  event.preventDefault();
  removerCookies();
  window.location.href = 'index.html';
});