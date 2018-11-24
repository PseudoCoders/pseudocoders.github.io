(() => {
    
  let cookies = document.cookie.split('; ');
  let cookieCount = 0;

  cookies.map(c => {

      if(c.split('=')[0] === 'nome')
          cookieCount++;

  });

  if(cookieCount < 1)
      window.location.href = 'index.html';
  
})();