jogador1 = localStorage.getItem("jogador1");
jogador2 = localStorage.getItem("jogador2");
pontuação1 = 0;
pontuação2 = 0;
document.getElementById("player1_name").innerHTML = jogador1 + ":";
document.getElementById("player2_name").innerHTML = jogador2 + ":";
document.getElementById("pontuação1").innerHTML = pontuação1;
document.getElementById("pontuação2").innerHTML = pontuação2;
document.getElementById("turno-pergunta").innerHTML = "Turno de pergunta " + jogador1;
document.getElementById("turno-resposta").innerHTML = "Turno de resposta " + jogador2;
function enviar() {
    getWord = document.getElementById("resposta").value;
    word = getWord.toLowerCase();
    console.log("Word in Lower Case = " + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    length = Math.floor(word.length/2);
    charAt2 = word.charAt(length);
    console.log(charAt2);
    lenght2 = Math.floor(word.length - 1);
    charAt3 = word.charAt(lenght2);
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    questionWord = "<h4 id='word'> P. " + remove_charAt3 +"</h4>";
    awnserWord = "<label> Insira sua resposta </label> <input type='text' id='resposta00'>";
    buttonWord = "<br> <br> <button class='btn btn-info' onclick='checar()'>Checar</button>"
    allWord = questionWord + awnserWord + buttonWord;
    document.getElementById("output").innerHTML = allWord;
    document.getElementById("resposta").value = "";
}
turnoderesposta = "jogador2";
turnodepergunta = "jogador1";
function checar() {
    getAwnser = document.getElementById("resposta00").value;
    awnser = getAwnser.toLowerCase();
    if(awnser==word){
        if(turnoderesposta=="jogador2"){
            pontuação2 = pontuação2 + 1;
            document.getElementById("pontuação2").innerHTML = pontuação2;
        }
        else{
            pontuação1 = pontuação1 + 1;
            document.getElementById("pontuação1").innerHTML = pontuação1;
        }
    }
    if(turnodepergunta=="jogador1"){
        turnoderesposta = "jogador1";
        turnodepergunta = "jogador2";
        document.getElementById("turno-pergunta").innerHTML = "Turno de pergunta " + jogador2;
        document.getElementById("turno-resposta").innerHTML = "Turno de resposta " + jogador1;

    }
    else{
        turnodepergunta = "jogador1";
        turnoderesposta = "jogador2";
        document.getElementById("turno-pergunta").innerHTML = "Turno de pergunta " + jogador1;
        document.getElementById("turno-resposta").innerHTML = "Turno de resposta " + jogador2;
    }
    document.getElementById("output").innerHTML = "";
}