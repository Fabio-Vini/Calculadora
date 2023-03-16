//Essa função serve para inserir os números dentro do id="resultado" e aparecerá na tela 
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;

    //Faz com que um número não exclua o outro digitado, e sim que fique um ao lado do outro
    document.getElementById('resultado').innerHTML = numero + num;
}

//Função que apaga os números digitados na tela
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar um por um utilizando 'LENGHT'
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); 
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."; 
    }
}