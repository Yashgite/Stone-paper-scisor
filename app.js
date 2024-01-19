let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const draw = () =>{
    console.log("the game is draw");
    msg.innerText = "Its a Draw";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("user is winner");
        msg.innerText = `yehh.. you got a point ! ${userChoice} beats a ${compChoice}`; 
        msg.style.backgroundColor = "green";    
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer is Winner");
        msg.innerText = `Oops.. Comp got a point ! ${compChoice} beats a ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () =>{
    const options = ["stone","paper","scisor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const playGame = (userChoice) => {
    console.log("user choice",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice",compChoice);
    if(userChoice === compChoice){
        draw();
    } else {
        let userWin = true;
        if(userChoice === "stone"){
            // compChoice = paper , scisor
           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // compChoice = stone , scisor
            userWin = compChoice === "scisor" ? false : true;
        } else{
            // compChoice = stone,paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
