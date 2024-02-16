var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();//tira o padrão do evento
    

    var form = document.querySelector("#form-adiciona");

    //Extraindo uma informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    //Criar a tr e a td do paciente
    var pacienteTr = montarTr(paciente);

    //Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); //add o paciente a tabela

    form.reset();//limpa o form depois de inserir um paciente

});

function obtemPacienteDoFormulario(form){
    var paciente ={//criando um objeto em js
        //propriedades do objeto
        nome : form.nome.value, 
        peso : form.peso.value, //acesaando através da prop name= "peso" lá do forms html
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }

    return paciente;
}

function montarTr(paciente){
    var pacienteTr= document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    var nomeTd = montarTd(paciente.nome, "info-nome");//cria as colunas
   
    var pesoTd = montarTd(paciente.peso, "info-peso");

    var alturaTd = montarTd(paciente.altura, "info-altura");

    var gorduraTd = montarTd(paciente.gordura, "info-gordura");

    var imcTd = montarTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);//vai add coluna dos dados a linha dum paciente
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");//cria as colunas
    td.classList.add(classe);
    td.textContent=dado;//add dados do inseridos no form nas colunas

    return td;
}

