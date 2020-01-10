let log = console.log;
//get resources
//start new game
//choose random answer and display dashes
//take users guess
//if correct guess - update board by switching dash with correct letter
//if wrong guess - add to stick figure & add wrong letter
//if out of answers, end game, else next guess

let dictionary = ["depaul", 'dabears', 'chicago'];
let but = document.querySelector('div button');
let ansrbox = document.getElementById('board').innerHTML
let ansr = ''
let guess = '';
let counter = 0;
let tog = false;

// document.body.addEventListener('keydown', processKeyPress, false);



//choose a random item from array of words as the solution
const randAnsr = () => {
    const x = Math.floor(Math.random() * dictionary.length);
    const ansr =  dictionary[x];
    return ansr;  
};

//update board with dashes equal to the length of the solution
const newGame = ansr => {
    let beg = '';
    for(i=0; i<ansr.length ;i++){
        beg += '-';
    };
    return beg;
};


//start a new game
but.addEventListener('click', () => {
    if(tog === false){
    ansr = randAnsr();
    let board = newGame(ansr);
    document.getElementById('board').innerHTML = board.toString();
    play();
    tog = true;
    }
});

const play = () => {
    for(i=0;i<5;i++){
        let guess = window.prompt("Guess: ");
        for(j=0; j < ansr.length; j++) {
            if(guess === ansr[j]){
                board[j] = ansr[j];
            };
        };

        ansrbox = board.toString();
    };

    tog = false;

};



// function processKeyPress(event){
//     let char = event.which;
//     input = String.fromCharCode(char);
// }











