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
let ansr = ''
let guess = '';
let tog = false;
let sit = 'case0'
document.getElementById('figure').innerHTML = '<img src=".//images/'+sit+'.png">';

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
    let board = newGame(ansr).toString();
    document.getElementById('board').innerHTML = board;
    document.getElementById('wletters').innerHTML = '';
    tog = true;
    play(board, ansr);
    }
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
    let counter = 0;
    $(document).keydown(function(e){
        let sit = '';
        let guess = String.fromCharCode(e.which).toLowerCase();
        if(ansr.includes(guess)) {
            board = charSwitch(ansr,guess,board);
        }else{
            document.getElementById('wletters').innerHTML += guess;
            counter++;
            console.log(counter);
            log(sit);
            switch(counter){
                case 1: sit = 'case1'; break;
                case 2: sit = 'case2'; break;
                case 3: sit = 'case3'; break;
                case 4: sit = 'case4'; break;
                case 5: sit = 'case5'; break;
                case 6: sit = 'case6'; break;
                
            };
            document.getElementById('figure').innerHTML = '<img src=".//images/'+sit+'.png">';

    
            log(sit);
            console.log(counter);
            
            if(counter == 5){
                alert('GameOver');
            };
        };
        document.getElementById('board').innerHTML = board;

        
        
    }); 
    tog = false;
};


// switch(counter){
//     case 1: document.getElementById('figure').outerHTML = '<img src=".//images/case1.png">';
//     case 2: document.getElementById('figure').outerHTML = '<img src=".//images/case2.png">';
//     case 3: document.getElementById('figure').outerHTML = '<img src=".//images/case3.png">';
//     case 4: document.getElementById('figure').outerHTML = '<img src=".//images/case4.png">';
//     case 5: document.getElementById('figure').outerHTML = '<img src=".//images/case5.png">';
//     case 6: document.getElementById('figure').outerHTML = '<img src=".//images/case6.png">';
// };








