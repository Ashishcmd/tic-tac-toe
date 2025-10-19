let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function resetGame(){
    console.log("ffrgr")
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

function enableBoxes(){
    for(box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
    
});


function showWinner(winner){
    msg.innerText = `Congrtulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    for(box of boxes){
        box.disabled = true;
    }
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log(`Winner ${pos1}`)
                showWinner(pos1);
            }
        }
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
