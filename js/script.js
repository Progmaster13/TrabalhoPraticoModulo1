window.addEventListener('load', start);
var corVermelha = null;
var corVerde = null;
var corAzul = null;

function start() {
  console.log('Página totalmente carregada');
  corVermelha = document.querySelector('#botaoVermelho');
  corVermelha.addEventListener('change', verificaCor);

  corVerde = document.querySelector('#botaoVerde');
  corVerde.addEventListener('change', verificaCor);

  corAzul = document.querySelector('#botaoAzul');
  corAzul.addEventListener('change', verificaCor);
}

function verificaCor(event) {
  corVermelha = document.querySelector('#botaoVermelho');
  var valorVermelho = document.querySelector('#txtVermelho');
  valorVermelho.value = corVermelha.value;

  corVerde = document.querySelector('#botaoVerde');
  var valorVerde = document.querySelector('#txtVerde');
  valorVerde.value = corVerde.value;

  corAzul = document.querySelector('#botaoAzul');
  var valorAzul = document.querySelector('#txtAzul');
  valorAzul.value = corAzul.value;

  var divCores = (document.getElementById('divcores').style.backgroundColor =
    'rgb(' +
    corVermelha.value +
    ',' +
    corVerde.value +
    ',' +
    corAzul.value +
    ')');
}
