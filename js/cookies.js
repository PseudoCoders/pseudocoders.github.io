const criarCookieNome = nome => {
  document.cookie = `nome=${nome}`;
}

const removerCookies = () => {
  let cookies = document.cookie
                    .split('; ')
                    .map(c => c.split('='));

    cookies.forEach(c => {
        document.cookie = `${c[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    });
};
