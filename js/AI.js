function TicTacToeAi() {
    this.scores = {win: -1, lose: 1, draw: 0};
}
const Ai = new TicTacToeAi();

TicTacToeAi.prototype.bestMove = function() {
    result = board.checkWin();
    if(result !== null){
        return this.scores[result]
    }

    let bestScore = -Infinity;
    let bMove;
    
    for(let i = 0; i < board.template.length; i++){
        if(board.template[i] == ''){
            board.template[i] = 'o';
            let score = Ai.minimax(board.template, false, 0);
            board.template[i] = ''
            if(score > bestScore){
                bestScore = score;
                bMove = i;
            }
        }
    }
    onLoad()
    board.template[bMove] = 'o'
    let item = document.querySelectorAll('#cell')[bMove];
    item.className = "Po"
}

TicTacToeAi.prototype.minimax = function(Pboard, isMaximizing, depth){
    // cek pemenang
    result = board.checkWin();
    if(result !== null){
        return this.scores[result];
    }

    // maximizing
    if (isMaximizing){
        let bestScore = -Infinity;
        for(let i = 0; i < board.template.length; i++){
            if(board.template[i] === ''){
                board.template[i] = 'o';
                let score = Ai.minimax(board, false, depth + 1);
                board.template[i] = '';
                bestScore = Math.max(score,bestScore);
            }
        }
        return bestScore;
    }
    // Minimizing
    else{
        let bestScore = Infinity;
        for(let i = 0; i < board.template.length; i++){
            if(board.template[i] === ''){
                board.template[i] = 'x';
                let score = Ai.minimax(board, true, depth + 1);
                board.template[i] = '';
                bestScore = Math.min(score,bestScore);
            }
        }
        return bestScore;
    }
};