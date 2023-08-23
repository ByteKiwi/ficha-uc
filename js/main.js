var vidamaxima = 12;
var vidaatual = 0;
// aqui tá inserido a mão para testes, mas futuramente os players que vão inserir
var fotoplayer = document.getElementById("fotoplayer");

if(vidaatual <= vidamaxima/2 && vidaatual >0){
    fotoplayer.style.backgroundColor = "#ff0000";
}

else if(vidaatual <=0){
    fotoplayer.style.backgroundColor = "#f2f2f2";
}

else{
    fotoplayer.style.backgroundColor = "#000000";
}
