let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let newgame = document.querySelector("#newgame");
let Winner = document.querySelector(".Winner");
let msg = document.querySelector("#msg");
let count = 0;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    Winner.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }

        box.Disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }


    });

});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    Winner.classList.remove("hide");
    disableboxes();
};
const disableboxes = () => {
    for (const box of boxes) {
        box.Disabled = true;
    }
}

const enableboxes = () => {
    for (const box of boxes) {
        box.Disabled = false;
        box.innerText = '';
    }
}
const displaywinner = (winner) => {
    msg.innerText = `Wow!!!! Winner is ${winner}`;
    Winner.classList.remove("hide");
    disableboxes();
}
function checkWinner() {
    for (let pattern of winpattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != '' && posval2 != '' && posval3 != '') {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log(`Player ${posval1} is Winner`);

                console.log("Winner Winner Chicken Dinner....");
                displaywinner(posval1);
            }
        }






    }
}
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
