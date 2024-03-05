var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();//tira o padrão do evento
    
    var form = document.querySelector("#form-adiciona");

    //Extraindo uma informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //verifica se paciente é válido
    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length >0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();//limpa o form depois de inserir um paciente

    var mensagemErro =document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML =""; //vai apagar os erros quando um paciente for add
});

function exibeMensagensDeErro(erros){
    var ul= document.querySelector("#mensagens-erro");
    ul.innerHTML= "";//innerHTML permite controlar conteúdo interno Html de um elemento, assim removemos todo conteudo html

    erros.forEach(function(erro){
        var li =document.createElement("li");
        li.textContent=erro;
        ul.appendChild(li);
    });
}

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

function validaPaciente(paciente){
    var erros = [];

    if(!validaAltura(paciente.altura)){
        erros.push( "A Altura é inválida!");//push coloca no array
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é inválido!"); //vamos estrair essa mensagem pra uma var erro e se o tam da string for>0 então há erros
    }

    if(paciente.nome.length == 0){
        erros.push("Paciente sem nome!");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo gordura está em branco!");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo peso está em branco!");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo altura está em branco!");
    }

    return erros;
}

function adicionaPacienteNaTabela(paciente){
   //Criar a tr e a td do paciente
   var pacienteTr = montarTr(paciente);
   //Adicionando paciente na tabela
   var tabela = document.querySelector("#tabela-pacientes");

   tabela.appendChild(pacienteTr); //add o paciente a tabela
}

