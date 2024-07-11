function mostravalor(elemento) {
  var idade = elemento.getAttribute("data-idade");
  var cpf = elemento.getAttribute("data-cpf");
  console.log("Idade: " + idade + ", CPF: " + cpf);
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("li").forEach(function(li) {
      li.querySelector(".idade").textContent = li.getAttribute("data-idade");
      li.querySelector(".cpf").textContent = li.getAttribute("data-cpf");
  });
});