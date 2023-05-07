 // função para carregar os dados do signo selecionado
 function loadSignInfo(sign) {
  fetch('assets/js/capivaras.json')
      .then((response) => response.json())
      .then((data) => {
          // encontra o objeto com as informações do signo
          const signData = data.find((item) => item.sign === sign);
          // atualiza as informações da página com os dados do signo
          document.getElementById('sign-image').src = signData.image;
          document.getElementById('sign-name').innerHTML = signData.name;
          document.getElementById('sign-date').innerHTML = signData.date;
          document.getElementById('sign-element').innerHTML = signData.element;
          document.getElementById('sign-text').innerHTML = signData.text;
      });
}

// adiciona um evento para atualizar as informações quando um signo for selecionado
document.getElementById('sign-select').addEventListener('change', (event) => {
  const selectedSign = event.target.value;
  if (selectedSign) {
      loadSignInfo(selectedSign);
      document.getElementById('sign-info').style.display = 'block';
      document.getElementById('sign-name').innerText = name + ' - ' + selectedSign;
  } else {
      document.getElementById('sign-info').style.display = 'none';
  }
});