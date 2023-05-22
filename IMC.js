const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
	event.preventDefault();

	const peso = parseFloat(document.getElementById('peso').value.replace(',','.'));
	const altura = parseFloat(document.getElementById('altura').value.replace(',','.'));
	
	const imc = (peso / (altura * altura)).toFixed(2);

	const valor =  document.getElementById('valor');
	let description = '';

	document.getElementById('infos').classList.remove('escondido');

	if (imc<18.5) {
		description = 'Cuidado! Você está abaixo do peso.';
	}else if (imc>=18.5 && imc<=25) {
		description ='Você está no peso ideal!';
	}else if (imc>=25 && imc<=30) {
		description ='Cuidado! Você está com sobrepeso.';
	}else if (imc>=30 && imc<=34.9) {
		description ='Você está com obesidade moderada.';
	}else if (imc>=35 && imc<=39.9) {
		description ='Você está com obesidade severa!';
	}else {
		description ='Você está com obesidade mórbida!';
	}

	valor.textContent = imc.replace('.',',');
	document.getElementById('descricao').textContent = description;
});
