let log = console.log;
let input = '';

document.body.addEventListener('keypress', processKeyPress, false);


function processKeyPress(event){
    let char = event.which;
    input += String.fromCharCode(char);
    
}

log(input);


