let log = console.log;

let name1 = new String('john');
let name2 = new String('joey');
let name3 = new String('----');

name1.split('');
name2.split('');
name3.split('');



for(i=0;i<name1.length;i++){
    if(name1[i] === name2[i]){
        log(name3[i]);
        log(name1[i]);
        name3[i] = name1[i];
    };
};

name3.toString();

log($name3);