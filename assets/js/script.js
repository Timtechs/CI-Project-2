document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame()

})



function runGame() {
    document.getElementsByClassName("pCount").value = "";
    document.getElementsByClassName("cCount").value = "";

    let game = ["sword", "axe", "lance"]
    for (let i = 0; i < game; i++);

    if (playerChoice === game[0]) {
        if (computerChoice === game[0]) {
            let olddCount = parseInt(document.getElementById("dCount").innerText);
            document.getElementById("dCount").innerText = ++olddCount;
        }   else if (computerChoice === game[1]) {
            let oldpCount = parseInt(document.getElementById("pCount").innerText);
            document.getElementById("pCount").innerText = ++oldpCount;
        }   else if (computerChoice === game[2]) {
            let oldcCount = parseInt(document.getElementById("cCount").innerText);
            document.getElementById("cCount").innerText = ++oldcCount;
        } else {
            alert("Error")
        }
    }

    if (playerChoice === game[1]) {
        if (computerChoice === game[0]) {
            let oldcCount = parseInt(document.getElementById("cCount").innerText);
            document.getElementById("cCount").innerText = ++oldcCount;
        }   else if (computerChoice === game[1]) {
            let olddCount = parseInt(document.getElementById("dCount").innerText);
            document.getElementById("dCount").innerText = ++olddCount;
        }   else if (computerChoice === game[2]) {
            let oldpCount = parseInt(document.getElementById("pCount").innerText);
            document.getElementById("pCount").innerText = ++oldpCount;
        } else {
            alert("Error")
        }
    }

    if (playerChoice === game[2]) {
        if (computerChoice === game[0]) {
            let oldpCount = parseInt(document.getElementById("pCount").innerText);
            document.getElementById("pCount").innerText = ++oldpCount;
        }   else if (computerChoice === game[1]) {
            let oldcCount = parseInt(document.getElementById("cCount").innerText);
            document.getElementById("cCount").innerText = ++oldcCount;
        }   else if (computerChoice === game[2]) {
            let olddCount = parseInt(document.getElementById("dCount").innerText);
            document.getElementById("dCount").innerText = ++olddCount;
        } else {
            alert("Error")
        }
    }
}

