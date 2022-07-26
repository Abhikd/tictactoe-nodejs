const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let player = "X";

let tictactoe = [
    "", "", "", "", "", "", "", "",""
];

const printBoard = () => {
    let line = "";
    let c = 0;
    for (let i = 1; i < 10; i++) {
        line += tictactoe[i - 1] + " | ";
        if (i % 3 === 0) {
            c += 1;
            console.log(line);
            if (c <= 2) console.log("_________");
            line = "";
        }
    }
}

const defaultPlayer = () => {
    rl.question("You are X. Do you want to change to O? Press y or n for yes or no respectively.", function (defaultorChoose) {
        let choice = defaultorChoose.toLowerCase();
        if (choice === "y") {
            setPlayer();
        }
        else if (choice === "n") {
            console.log("You are X");
            printBoard();
            playTicTacToe();
        }

        else defaultPlayer();
    });
}

const setPlayer = () => {
    rl.question("You are X. Press O to change to O", function (whichPlayer) {
        changePlayer(whichPlayer);
    });
}

const changePlayer = (playerChange) => {
    let mov = playerChange.toUpperCase();
    if (mov === "X" || mov === "O") {
        console.log(`Starting player is ${mov}`);
        player = mov;
        printBoard();
        playTicTacToe();
    }
    else setPlayer();
}

const playTicTacToe = () => {
    

       rl.question("Your move ", function (move) {
            gameplayer(move);
        });

    
};


const gameplayer = (move) => {
    let movenum = parseInt(move) - 1;

    for (let i = 0; i < tictactoe.length; i++) {
        if ( movenum == i && tictactoe[i] === "") {

            tictactoe[i] = player;
            if (player === "X") {
                player = "O";
            } else if (player === "O") {
                player = "X";
            }

        } else {
            playTicTacToe();
        }
    }

    console.log("\n");
    printBoard();
    const winner = calculateWinner();
    if (winner != "") {
        console.log(`Winner is ${winner}`)
        process.exit(0);
    }
    playTicTacToe();

}

const calculateWinner = () => {

    if (tictactoe[0] == tictactoe[1] && tictactoe[0] == tictactoe[2]) {
        return tictactoe[0];

    } else if (tictactoe[3] == tictactoe[4] && tictactoe[3] == tictactoe[5]) {
        return tictactoe[3];

    } else if (tictactoe[6] == tictactoe[7] && tictactoe[6] == tictactoe[8]) {
        return tictactoe[6];

    } else if (tictactoe[0] == tictactoe[3] && tictactoe[0] == tictactoe[6]) {
        return tictactoe[0];

    } else if (tictactoe[1] == tictactoe[4] && tictactoe[1] == tictactoe[7]) {
        return tictactoe[1];

    } else if (tictactoe[2] == tictactoe[5] && tictactoe[2] == tictactoe[8]) {
        return winner = tictactoe[2];

    } else if (tictactoe[0] == tictactoe[4] && tictactoe[0] == tictactoe[8]) {
        return tictactoe[0];

    } else if (tictactoe[2] == tictactoe[4] && tictactoe[2] == tictactoe[6]) {
        return tictactoe[2];
    }

    return "";
}



printBoard();
defaultPlayer();
