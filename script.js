const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo, index) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  //implementar a funcionalidade de deletar uma tarefa existente, além de atualizar a renderização dos elementos na tela.
  button.addEventListener("click", function(){
    tasks.splice(index, 1);
    renderElements(tasks);
  })

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  // adicionando classe de estilo aos span
  if (taskInfo.tipo === "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskInfo.tipo === "Prioritário") {
    span.classList.add("span-priority");
  } else if (taskInfo.tipo === "Normal") {
    span.classList.add("span-normal");
  }

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for (let i = 0; i < taskList.length; i++) {
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }
}

renderElements(tasks);

// Adicione um evento de clique ao botão "Adicionar Tarefa na Lista"

const botaoAdd = document.getElementById("btnSubmit");
botaoAdd.addEventListener("click", addTask);


function addTask(event) {
  event.preventDefault();

  const titulo = document.getElementById("input_title").value;
  const tipo = document.getElementById("input_priority").value;

  const objetoNovo = {
    titulo: titulo,
    tipo: tipo,
  };

  tasks.push(objetoNovo);
  renderElements(tasks);

  document.getElementById("input_title").value = "";
}
