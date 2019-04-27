const cardText = document.querySelector('.card-text');

(async() => {
  const response = await axios.get('https://maria-ia.herokuapp.com/maria');
  const res = response.data;

  cardText.textContent = res.tweet;
})();
