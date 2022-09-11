const OPTIONS = ['sword', 'axe', 'lance'];
let dCount = 0;
let pCount = 0;
let cCount = 0;
let userSelection = null;
let computerSelection = null;

function initializeGame() {
    document.getElementById('sword').addEventListener('click', selectUserOption);
    document.getElementById('axe').addEventListener('click', selectUserOption);
    document.getElementById('lance').addEventListener('click', selectUserOption);
}

document.addEventListener("DOMContentLoaded", initializeGame);

/** js doc
 * userinput recieved
 * computerSelection generates a choice
 * userSelection/computerSelection inputs sent to checkWinner()
 * checkWinner() sent to incrementWinnerCount()
 * incrementWinnerCount() sent to displayWinner()
 **/
function selectUserOption(event) {
    userSelection = event.target.innerHTML;
    computerSelection = generateComputerSelection();
    displayWinner(userSelection, computerSelection);
    console.log(computerSelection);
}

function generateComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3);
    return OPTIONS[computerSelection];
}

function checkWinner(userSelection, computerSelection) {
    if (userSelection === 'sword' && computerSelection === 'axe') {
        return userSelection;

    } else if (userSelection === 'sword' && computerSelection === 'lance') {
        return computerSelection;

    } else if (userSelection === 'axe' && computerSelection === 'lance') {
        return userSelection;

    } else if (userSelection === 'axe' && computerSelection === 'sword') {
        return computerSelection;

    } else if (userSelection === 'lance' && computerSelection === 'sword') {
        return userSelection;

    } else if (userSelection === 'lance' && computerSelection === 'axe') {
        return computerSelection;
    }
}

function incrementWinnerCount(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        dCount++;
        return dCount;
    }
    let winner = checkWinner(userSelection, computerSelection);
    if (winner === userSelection) {
        pCount++;

    } else {
        cCount++;
    }
}

function displayWinner(userSelection, computerSelection) {
    incrementWinnerCount(userSelection, computerSelection);
    document.getElementById('pCount').innerHTML = pCount;
    document.getElementById('cCount').innerHTML = cCount;
    document.getElementById('dCount').innerHTML = dCount;
}