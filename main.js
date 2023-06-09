function enter() {
    jogador1 = document.getElementById("player1").value;
    jogador2 = document.getElementById("player2").value;
    localStorage.setItem("jogador1", jogador1);
    localStorage.setItem("jogador2", jogador2);
    window.location="game_page.html";
}