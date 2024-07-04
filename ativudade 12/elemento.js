function mostravalor(elemento) {
  var idade = elemento.getAttribute("data-idade");
  var cpf = elemento.getAttribute("data-cpf");
  console.log("Idade: " + idade + ", CPF: " + cpf);
}
