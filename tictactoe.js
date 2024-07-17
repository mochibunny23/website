   /*0 - blank, 1 - O, 2 - X*/
   let state = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let won = false;
let gameCondition = [true, false, false, false]; /*1. game is happening, 2. Tie, 3. O won, 4. X won*/
let Oturn = true;
let freeSpace = true;
const restartButton = document.getElementById('restartButton');
const Xelement = document.querySelector(".X");
const cell1 = document.getElementById('1');
const cell2 = document.getElementById('2');
const cell3 = document.getElementById('3');
const cell4 = document.getElementById('4');
const cell5 = document.getElementById('5');
const cell6 = document.getElementById('6');
const cell7 = document.getElementById('7');
const cell8 = document.getElementById('8');
const cell9 = document.getElementById('9');
const OwinMsg = document.getElementById('Owon');
const XwinMsg = document.getElementById('Xwon');
const tieMsg = document.getElementById('tie');
const cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]

restartButton.addEventListener('click', function() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('O');
        cells[i].classList.remove('X');
        cells[i].classList.add('blank');
    }

    OwinMsg.style.display = "none";
    XwinMsg.style.display = "none";
    tieMsg.style.display = "none";

    state = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    won = false
    Oturn = true;
    freeSpace = true;
    gameCondition = [true, false, false, false];
    restartButton.style.display = "none";
});

function checkForClick(cell) {
    cell.addEventListener('click', function() {
        if (cell.classList.contains("blank") && !won) {
            cell.classList.remove('blank');
            if (Oturn == true) {
                cell.classList.add('O');
                Oturn = false;
                state[cell.id - 1] = 1;
            } else {
                cell.classList.add('X');
                Oturn = true;
                state[cell.id - 1] = 2;
            }
            console.log(state);

            freeSpace = false;
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].classList.contains("blank")) {
                    freeSpace = true;
                }
            }

            for (let i = 0; i < win.length; i++) {
                if (state[win[i][0]] == state[win[i][1]] && state[win[i][2]] == state[win[i][1]] && state[win[i][0]] != 0) {
                    won = true;
                    if (state[win[i][0]] == 1) {
                        gameCondition[2] = true;
                        console.log('O won');
                        restartButton.style.display = "inline-block";
                        OwinMsg.style.display = "inline-block";
                    }
                    if (state[win[i][0]] == 2) {
                        gameCondition[3] = true;
                        console.log('X won');
                        restartButton.style.display = "inline-block";
                        XwinMsg.style.display = "inline-block";
                    }
                }
            }

            if (!freeSpace && !won) {
                console.log('Tie');
                restartButton.style.display = "inline-block";
                tieMsg.style.display = "inline-block";
            }
        }
    })
}

for (let i = 0; i < cells.length; i++) {
    checkForClick(cells[i]);
    }
