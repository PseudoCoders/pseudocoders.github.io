const analyzeBtn = document.querySelector('.analyze');

analyzeBtn.addEventListener('click', async() => {
  const response = await axios.get('https://maria-ia.herokuapp.com/maria');
  console.log(response.data);
});
