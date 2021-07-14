function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar!!</b>";
   // alert("obrigado por clicar");
   //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}
/*
 function trocar(){
     document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
     //alert("trocar texto");
 }
 function voltar(){
    document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
 }
*/
function trocar(elemento){
    elemento.innerHTML ="Obrigado por passar o mouse";
   // document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML ="Passe o mouse aqui";
  // document.getElementById("mousemove").innerHTML ="Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
};
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};
*/
//alert(soma(5,10));
//alert(setReplace("Vai Japão!!", "Japão", "Brasil"));
/*
function validaidade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
};

var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));

/*
var d = new Date();
alert(d);
//alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getUTCDate());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
   // count = count + 1 ;
   alert(count);
   count++;
};
*/
/*
var idade = prompt("Qual a sua idade");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/
//alert(lista);
/*
var nome = "Edvaldo Fagundes";
var idade = 39;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
