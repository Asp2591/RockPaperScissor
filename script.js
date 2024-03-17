let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice')

const msg=document.querySelector('#msg')
const start=document.querySelector('.start')
let scoreUpdate1=document.querySelector('#yourScore')
let scoreUpdate2=document.querySelector('#compScore')

const genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
}

const playGame=(userChoice)=>{
    console.log('User Choice :',userChoice)

    let compChoice=genCompChoice()
    console.log('Comp Choice :',compChoice)

    result(userChoice,compChoice)
    
}

const draw=()=>{ 
        console.log('Draw')
        msg.innerText="Draw the game !! Try again";
        start.style.backgroundColor='yellow';
        msg.style.color='black'

        
}

const result=(userChoice,compChoice)=>{ 
    if(userChoice===compChoice){
        draw()
    }
    else if  ((userChoice==='rock' && compChoice==='paper')||(userChoice==='paper' && compChoice==='scissor')||(userChoice==='scissor' && compChoice==='rock')) {
        compScore++;
        scoreUpdate2.innerText=compScore
        msg.innerText=`You lost the game !! ${compChoice} beats ${userChoice}`;
        console.log('You lost ')
        start.style.backgroundColor='red';
        msg.style.color='black'

    } 
    else {
        userScore++;
        scoreUpdate1.innerText=userScore
        msg.innerText=`You won the game !! ${userChoice} beats ${compChoice}`;
        console.log('You Won')
        start.style.backgroundColor='green';
        msg.style.color='black'


    } 
};



choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id')
        playGame(userChoice)
        
    })
});
