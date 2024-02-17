//para excluir um paciente vamos escutar um evento de duplo click nas linhas da tabela
//cada linha tem a classe paciente então vamos usála para fazer isso
//n dá certo
var tabela = document.querySelector("table");

//para que tbm possa ser excluido o paciente q for add depois
//quem escutará o evento será o pai a tabela

tabela.addEventListener("dblclick", function(event){
    var alvoEvento= event.target;//pega onde foi clicado (tipo na altura)
    var paiDoalvo = alvoEvento.parentNode;/// ve o elemento pai (linha)
    paiDoalvo.classList.add("fadeOut");

    setTimeout(function(){
        paiDoalvo.remove();//e remove
    }, 498);
});