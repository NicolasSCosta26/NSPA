const form = document.getElementById("form-transacao");
const tabela = document.querySelector("#tabela-transacoes tbody");
const totalReceitas = document.getElementById("total-receitas");
const totalDespesas = document.getElementById("total-despesas");
const saldo = document.getElementById("saldo");

let receitas = 0;
let despesas = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;
  const data = new Date().toLocaleDateString("pt-BR");

  if (descricao === "" || isNaN(valor)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // Criar nova linha na tabela
  const novaLinha = tabela.insertRow();
  novaLinha.innerHTML = `
    <td>${descricao}</td>
    <td>${valor.toFixed(2)}</td>
    <td>${tipo}</td>
    <td>${data}</td>
  `;

  // Atualizar valores
  if (tipo === "receita") {
    receitas += valor;
  } else {
    despesas += valor;
  }

  atualizarResumo();

  // Limpar formulário
  form.reset();
});

function atualizarResumo() {
  totalReceitas.textContent = receitas.toFixed(2);
  totalDespesas.textContent = despesas.toFixed(2);
  saldo.textContent = (receitas - despesas).toFixed(2);
}
