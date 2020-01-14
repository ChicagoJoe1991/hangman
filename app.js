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
let ansrbox = document.getElementById('board').innerHTML;
let guess = '';
let sit = 'case0'

document.getElementById('figure').innerHTML = '<img src=".//images/'+sit+'.png">';

//choose a random item from array of words as the solution
const randAnsr = () => {
    let x = Math.floor(Math.random() * dictionary.length);
    let ansr =  dictionary[x];
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


//start a new game on load
document.addEventListener('onload', () => {
    let ansr = randAnsr();
    let board = newGame(ansr).toString();
    log(board);
    document.getElementById('board').innerHTML = board;
    document.getElementById('wletters').innerHTML = '';
    document.getElementById('figure').innerHTML = '<img src=".//images/case0.png">';
    document.getElementById('titl').innerHTML = 'HANGMAN';
    guess = '';
    play(board, ansr);
});


//start new game when button clicked
but.addEventListener('click', (e) => {
    ansr = randAnsr();
    let board = newGame(ansr).toString();
    document.getElementById('board').innerHTML = board;
    document.getElementById('wletters').innerHTML = '';
    document.getElementById('figure').innerHTML = '<img src=".//images/case0.png">';
    document.getElementById('titl').innerHTML = 'HANGMAN';
    guess = '';
    play(board, ansr);
    e.preventDefault()
});


const charSwitch = (str, char, beg) => {
    for(i=0;i<str.length;i++){ 
        if(str[i] == char){
            beg = beg.substr(0,i) + char + beg.substr(i+1);
        };
    };
    return beg;
};




const play = (board, ansr)=> {
    counter = 0;
    $(document).keydown(function(e){
        sit = '';
        guess = String.fromCharCode(e.which).toLowerCase();
        if(ansr.includes(guess)) {
            board = charSwitch(ansr,guess,board);
        }else{
            document.getElementById('wletters').innerHTML += guess;
            counter++;
            switch(counter){
                case 1: sit = 'case1'; break;
                case 2: sit = 'case2'; break;
                case 3: sit = 'case3'; break;
                case 4: sit = 'case4'; break;
                case 5: sit = 'case5'; break;
                case 6: sit = 'case6'; break;
            };
            document.getElementById('figure').innerHTML = '<img src=".//images/'+sit+'.png">';
         
            if(counter == 6){
                document.getElementById('titl').innerHTML = 'GAME OVER';
                counter = 0;
            };
        };
        log(board);
        document.getElementById('board').innerHTML = board;
    }); 
};



