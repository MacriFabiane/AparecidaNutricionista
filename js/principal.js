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
    var pesoValido =true;
    var alturaValida =true;

    if(peso<=0 || peso>=1000){
        console.log("Peso inválido");
        pesoValido=false;
        tdImc.textContent="Peso inválido!";
        //paciente.style.color= "red"; //muda a cor do texto da linha não é uma boa pratica fazer estilo aqui
        paciente.classList.add("paciente-invalido");
    }
    if(altura<=0 || altura >=3.00){
        console.log("Altura inválida");
        alturaValida =false;
        tdImc.textContent ="Altura inválida!";
        paciente.classList.add("paciente-invalido"); //muda a cor do fundo
    }

    if (pesoValido && alturaValida){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2); //além de acessar o text content tbm coloca
    }
    
}
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    console.log("Oie, cliquei no botão.");
})

