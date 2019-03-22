function colar(){
	//Armazenando o valor da nota informada.
	var nota = document.getElementById("nota").value;

	//Criando um novo elemento.
	var newDiv = document.createElement("div");

	//Definindo uma classe para manipular o novo elemento.
	newDiv.setAttribute("class", "nota-area");

	//Pegando o valor do nível de prioridade
	var nivel = document.getElementById("prioridades").value;


	/*
	*Escopo de condição para verificar qual a escala de prioridade.
	*Definindo cores para cada nivel.
	*/
	if(nivel == 1) {
		newDiv.style.backgroundColor = '#347aba';
	} else if (nivel == 2) {
		newDiv.style.backgroundColor = 'green';
	} else if(nivel == 3) {
		newDiv.style.backgroundColor = 'red';
	}

	//Setando informações no corpo do novo elemento
	newDiv.innerHTML = nota+'<a href="javascript:;" onclick="deletar(this);">X</a>';

	//Atribuição do elemento ao corpo do documento.
	var main = document.getElementsByTagName("main")[0];
	main.appendChild(newDiv);


	//Toda vez que uma nota for atribuida será executado essa função.
	reset();
}

//Função que reseta o valor da nota após ser adicionada;
function reset(){
	var nota = document.getElementById("nota").value = "";

}

//Deletando a nota do documento.
function deletar(obj) {
	var element = obj.parentNode;
	var parent = element.parentNode;

	parent.removeChild(element);
}