function pegarNumeros(){
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  return [n1, n2];
}

// volta o fundo para o padrão (gradiente do CSS)
function resetarFundo(){
  document.body.style.backgroundImage = "";
  document.body.style.background = "";
}

function mostrarResultado(valor){
  document.getElementById("resultado").innerText = "Resultado: " + valor;
  document.getElementById("botaoVovo").style.display = "block";
}

function somar(){
  resetarFundo(); // volta fundo antes de calcular
  let [a,b] = pegarNumeros();
  mostrarResultado(a + b);
}

function subtrair(){
  resetarFundo(); // volta fundo antes de calcular
  let [a,b] = pegarNumeros();
  mostrarResultado(a - b);
}

function multiplicar(){
  resetarFundo(); // volta fundo antes de calcular
  let [a,b] = pegarNumeros();
  mostrarResultado(a * b);
}

function mudarFundo(){
  document.body.style.background =
  "url('Fundo.jpg') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
}