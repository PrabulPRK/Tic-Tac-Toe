let player = "player_1";
let isGameOver = false;

document.getElementById('square_1').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_2').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_3').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_4').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_5').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_6').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_7').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_8').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })
    document.getElementById('square_9').addEventListener('click',function (e) {
        const innerText = e.target.innerText; 
        if (innerText || isGameOver) return;
        if (player === "player_1") {
            e.target.innerText = "X";
            player = "player_2"
        } else {
            e.target.innerText = "O";
            player = "player_1"
        }
        gameOver(e.target.innerText);
    })

document.getElementById('reset').addEventListener('click', function (e){
    const squares = document.getElementsByClassName('mark')
    for(const square of squares){
        square.innerText = "";
        player = 'player_1'
    }
    isGameOver = false;
    document.getElementById('winner').innerText = "";
})

const showGameOver = (char) => {
    document.getElementById('winner').innerText = char === "X" ? "winner :: player_1" : "winner :: player_2";
}

const gameOver = (char) => {
    let count = 0;
    const squares = document.getElementsByClassName('mark')
    for(const square of squares){
        if(square.innerText != "")
            count++;
    }
    if(count == 9){
        document.getElementById('winner').innerText = "No Winner";
    }

    if(getValue('square_1') === char && getValue('square_2') === char && getValue('square_3') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_4') === char && getValue('square_5') === char && getValue('square_6') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_7') === char && getValue('square_8') === char && getValue('square_9') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_1') === char && getValue('square_4') === char && getValue('square_7') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_2') === char && getValue('square_5') === char && getValue('square_8') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_3') === char && getValue('square_6') === char && getValue('square_9') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_1') === char && getValue('square_5') === char && getValue('square_9') === char){
        isGameOver = true;
        showGameOver(char);
    }
    if(getValue('square_3') === char && getValue('square_5') === char && getValue('square_7') === char){
        isGameOver = true;
        showGameOver(char);
    }
}

const getValue = (Id) => {
    return document.getElementById(Id).innerText;
}



const currentYear = new Date().getFullYear()
document.getElementById('date').innerText = currentYear