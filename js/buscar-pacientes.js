var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
   // console.log("Buscando pacientes");
    var xhr= new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Paciente-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        var erroAjax=document.querySelector("#erro-ajax");

        if(xhr.status == 200){//se a resposta for bem sucedida status 200 
           
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);//transforma o Json em um objeto js

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);    
            });
        }
        else{
            erroAjax.classList.remove("invisivel");
        }
    
    });

    xhr.send(); //envia a requisição

});