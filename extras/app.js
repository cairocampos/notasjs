function colar(){
	var nota = document.getElementById("nota").value;
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "nota-area");
	var nivel = document.getElementById("prioridades").value;

	if(nivel == 1) {
		newDiv.style.backgroundColor = '#347aba';
	} else if (nivel == 2) {
		newDiv.style.backgroundColor = 'green';
	} else if(nivel == 3) {
		newDiv.style.backgroundColor = 'red';
	}

	newDiv.innerHTML = nota+'<a href="javascript:;" onclick="deletar(this);">X</a>';
	var main = document.getElementsByTagName("main")[0];
	main.appendChild(newDiv);

	reset();
}

function reset(){
	var nota = document.getElementById("nota").value = "";

}

function deletar(obj) {
	var element = obj.parentNode;
	var parent = element.parentNode;
	
	parent.removeChild(element);
}