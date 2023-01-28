const getUserChoice = (userInput) => {
    
userInput= userInput.toLowerCase()
console.log('player: ',userInput)
return userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' ?userInput: console.log('error: enter only rock, paper, or scissors') 
}

const getComputerChoice = () => {
let computerChoice = Math.floor((Math.random()*3))

return computerChoice === 0 ? computerChoice ='rock' : computerChoice === 1 ? computerChoice = 'paper' :computerChoice = 'scissors'
}

const determineWinner = (userInput,computerChoice)=> {
    console.log('computer: ',computerChoice)
    return userInput === computerChoice ? "it's a tie" : 
     userInput === 'rock' && computerChoice == 'paper' ? 'computer wins' :
     userInput === 'rock' && computerChoice == 'scissors' ? 'player wins' :
     userInput === 'paper' && computerChoice == 'scissors' ? 'computer wins' :

     userInput === 'paper' && computerChoice == 'rock' ? 'player wins' : 
     userInput === 'scissors' && computerChoice == 'rock' ? 'computer wins' :
     'player wins' 
}

const playGame= () => {
let userChoice  =getUserChoice('rock')
let computerChoice =  getComputerChoice()
console.log(determineWinner(userChoice ,computerChoice))
}

playGame()
