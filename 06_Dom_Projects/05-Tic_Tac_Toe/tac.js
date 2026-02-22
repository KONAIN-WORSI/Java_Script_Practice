const stat = document.getElementById('status')
const cells = document.querySelectorAll('.cell')
const resetBtn = document.getElementById('resetBtn')

let currentPlayer = 'X';
let gameActive = true;

const winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index')

    if (cell.textContent === '' && gameActive) {
        cell.textContent = currentPlayer;
        checkWin();
        if (gameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            stat.textContent = `Player: ${currentPlayer}'s Turn`;
        }
    }
}

function checkWin() {
    let roundWon = false;

    for (let index = 0; index < winingConditions.length; index++) {
        const element = winingConditions[index];
        const a = cells[element[0]].textContent;
        const b = cells[element[1]].textContent;
        const c = cells[element[2]].textContent;

        if(a && a === b && a === c) {
            roundWon = true;
            stat.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            break;
        }
    }

    if (!roundWon) {
        const isDraw = [...cells].every(cell => cell.textContent);
        if (isDraw) {
            stat.textContent = "Game is a draw!";
            gameActive = false;
        }
    }
}

function resetGame() {
    cells.forEach(cells => cells.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    stat.textContent = `Player: ${currentPlayer}'s Turn`;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick))
resetBtn.addEventListener('click', resetGame)
