let log = console.log;

let beg = '-------';
let str = 'chicago';
let char = 'c';

const charSwitch = (str, char, beg) => {
    for(i=0;i<str.length;i++){ 
        if(str[i] == char){
            beg = beg.substr(0,i) + char + beg.substr(i+1);
        };
    };
    return beg;
};


log(charSwitch(str,char,beg));