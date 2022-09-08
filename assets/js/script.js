document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            runGame()
        })
    }
})



function runGame() {
    document.getElementsByClassName("pCount").value = "";
    document.getElementsByClassName("cCount").value = "";
    document.getElementsByClassName("dCount").value = "";

    let game = ["sword", "axe", "lance"]
    for (let i = 0; i < game; i++);

    let swordBtn = document.getElementsByClassName("sword");
    let axeBtn = document.getElementsByClassName("axe");
    let lanceBtn = document.getElementsByClassName("lance");
    let playerChoice = [swordBtn, axeBtn, lanceBtn];
    let computerNumberChoice = Math.floor(Math.random()*3);
    let computerChoice = game[computerNumberChoice];

    if (playerChoice === swordBtn) {
        if (computerChoice === game[0]) {
            let olddCount = parseInt(document.getElementsByClassName("dCount").innerText);
            document.getElementsByClassName("dCount").innerText = ++olddCount;
        }   else if (computerChoice === game[1]) {
            let oldpCount = parseInt(document.getElementsByClassName("pCount").innerText);
            document.getElementsByClassName("pCount").innerText = ++oldpCount;
        }   else if (computerChoice === game[2]) {
            let oldcCount = parseInt(document.getElementsByClassName("cCount").innerText);
            document.getElementsByClassName("cCount").innerText = ++oldcCount;
        } else {
            alert("Error")
        }
    }

    if (playerChoice === axeBtn) {
        if (computerChoice === game[0]) {
            let oldcCount = parseInt(document.getElementsByClassName("cCount").innerText);
            document.getElementsByClassName("cCount").innerText = ++oldcCount;
        }   else if (computerChoice === game[1]) {
            let olddCount = parseInt(document.getElementsByClassName("dCount").innerText);
            document.getElementsByClassName("dCount").innerText = ++olddCount;
        }   else if (computerChoice === game[2]) {
            let oldpCount = parseInt(document.getElementsByClassName("pCount").innerText);
            document.getElementsByClassName("pCount").innerText = ++oldpCount;
        } else {
            alert("Error")
        }
    }

    if (playerChoice === lanceBtn) {
        if (computerChoice === game[0]) {
            let oldpCount = parseInt(document.getElementsByClassName("pCount").innerText);
            document.getElementsByClassName("pCount").innerText = ++oldpCount;
        }   else if (computerChoice === game[1]) {
            let oldcCount = parseInt(document.getElementsByClassName("cCount").innerText);
            document.getElementsByClassName("cCount").innerText = ++oldcCount;
        }   else if (computerChoice === game[2]) {
            let olddCount = parseInt(document.getElementsByClassName("dCount").innerText);
            document.getElementsByClassName("dCount").innerText = ++olddCount;
        } else {
            alert("Error")
        }
    }
}

function increaseScore() {
    let oldpCount = parseInt(document.getElementsByClassName("pCount").innerText);
    document.getElementsByClassName("pCount").innerText = ++oldpCount;

    let oldcCount = parseInt(document.getElementsByClassName("cCount").innerText);
    document.getElementsByClassName("cCount").innerText = ++oldcCount;

    let olddCount = parseInt(document.getElementsByClassName("dCount").innerText);
    document.getElementsByClassName("dCount").innerText = ++olddCount;
}