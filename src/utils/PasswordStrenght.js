function validarSenhaForca(senhaValidar){
	const senha = senhaValidar
	let forca = 0;	

	for (let i = 0; i < senha.length; i++)
	{
		++forca;	
	}

	if (senha.length > 15) {
		forca += 20;
	}

	if(senha.match(/[a-z]+/)){
		forca += 1;
	}

	if(senha.match(/[A-Z]+/)){
		forca += 2;
	}

	if(senha.match(/[@#$%&;*]/)){
		forca += 5;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -20;
	}

	if (senha.length < 7) {
		forca = 0;
	}
	mostrarForca(forca);
}

function mostrarForca(forca){	
	if(forca == 0) {
		document.getElementById("passwordStrMessage").innerHTML = "<span style='color: #ff0000'>Inválida</span>";
	}
	if((forca >= 7) && (forca < 10)){
		document.getElementById("passwordStrMessage").innerHTML = "<span style='color: #FFD700'>Fraca</span>";
	}
	if((forca >= 10) && (forca < 15)){
		document.getElementById("passwordStrMessage").innerHTML = "<span style='color: #7FFF00'>Média</span>";
	}
	if(forca >= 15){
		document.getElementById("passwordStrMessage").innerHTML = "<span style='color: #008000'>Forte</span>";
	}		
}