//console.log("Olá, Mundo!");
//console.log(document);
var titulo = document.querySelector(".titulo"); //salvando Ap Nutrição numa var
//console.log(titulo);
//textContent acessa somente o texto sem a tag
titulo.textContent= "Aparecida Nutricionista"; //mudando o titulo com js

var pacientes = document.querySelectorAll(".paciente");//trs da tabelas linhas

for (var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //conseguimos usar querySElector sem ser document obg
    var peso = tdPeso.textContent;

    var tdAltura =paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc =paciente.querySelector(".info-imc");

    //Validando dados
    var pesoValido =validaPeso(peso);
    var alturaValida =validaAltura(altura);

    if(!pesoValido){
        console.log("Peso inválido");
        pesoValido=false;
        tdImc.textContent="Peso inválido!";
        //paciente.style.color= "red"; //muda a cor do texto da linha não é uma boa pratica fazer estilo aqui
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaValida){
        console.log("Altura inválida");
        alturaValida =false;
        tdImc.textContent ="Altura inválida!";
        paciente.classList.add("paciente-invalido"); //muda a cor do fundo
    }

    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; //além de acessar o text content tbm coloca
    }
    
}

function calculaImc(peso, altura){
    var imc =0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso>=0 && peso <=1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >=0 && altura<=3.00){
        return true;
    }
    else {
        return false;
    }
}

