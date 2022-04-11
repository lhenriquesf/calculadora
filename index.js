const clicar = (num) => {
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
}

const limparConteudo = ()=>{
    document.getElementById('resultado').innerHTML = '';
}

const apagarCaractere = ()=>{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
} 

const calcular = ()=>{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
