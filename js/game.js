function print(index){
    let item = document.querySelectorAll('#cell')[index];

    if(item.className == 'x'){
        item.className = "Px";
        board.template[index] = 'x';
        onLoad()
        Ai.bestMove();
    }
}

function onLoad(){
    if(board.checkWin() != null){
        let text = document.getElementById("h1")

        document.getElementById("rst").style.display = "block";

        if(board.checkWin() == 'win'){
            text.innerHTML = "Player Menang!";
        }else if(board.checkWin() == 'lose'){
            text.innerHTML = "Ai Menang";
        }else{
            text.innerHTML = "Game Seri!"
        }
    }
}

function wReload(){
    window.location.reload()
}

document.addEventListener("DOMContentLoaded",onLoad())

