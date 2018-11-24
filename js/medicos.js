document.querySelector('#logout').addEventListener('click', event => {
  event.preventDefault();
  if (window.confirm('Deseja realmente encerrar sua sessão?')) {
    removerCookies();
    window.location.href = 'index.html';
  }
});