function printBoard(){
    this.template = [
        '','','',
        '','','',
        '','',''
    ]
    this.size = 3;
    this.combo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        
        [0,3,6],
        [1,4,7],
        [2,5,8],
        
        [0,4,8],
        [2,4,6]
    ]
}
const board = new printBoard();

// fungsi untuk mengecek sisa box yang tersisa
printBoard.prototype.moveLeft = function() {
    let a = 0;
    for(i = 0; i < board.template.length; i++){
        if(board.template[i] == ''){
            a++
        }
    }
    return a;
}
// funsi untuk mendapatkan pemenang
printBoard.prototype.checkWin = function() {
    let checkX = [];
    let checkO = [];
    for(let i = 0; i < this.combo.length; i++){
        for(let j = 0; j < this.combo[i].length; j++){
            let combo = this.combo[i][j];
            if(this.template[combo] == 'x') {
                if(!checkX.includes(combo))checkX.push(combo)
            }
            if(this.template[combo] == 'o') {
                if(!checkO.includes(combo))checkO.push(combo)
            }
        }
        let resultX = checkX.sort((a, b) => {return a - b}).toString();
        let resultO = checkO.sort((a, b) => {return a - b}).toString();
        if(resultX == this.combo[i].toString()) {return 'win'}
        else if(resultO == this.combo[i].toString()) {return 'lose'}
        else{checkO = []; checkX = []}
    }
    if(board.moveLeft() == 0){return 'draw'}
    else{return null};
}