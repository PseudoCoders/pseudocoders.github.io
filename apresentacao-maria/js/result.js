const cardText = document.querySelector('.card-text');

(async() => {
  const response = await axios.get('https://maria-ia.herokuapp.com/maria');
  console.log(response.data);
})();
