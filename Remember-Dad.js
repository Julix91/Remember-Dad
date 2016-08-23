
var vacationMemories = ['mallorca with judith', 'berlin with dad', 'netherlands with dad', 'austria with dad', 'netherlands and maxi', 'canada with chloe and jason'];

var rememberingDad = false;

while (rememberingDad === false) {
    for (var i = 0; i < vacationMemories.length; i++) {
        if (vacationMemories[i].includes("dad") !== false) {
            console.log("now i'm thinking of you, dad! us in " + vacationMemories[i]); var rememberingDad = true; break;
    } else {console.log("nope, not thinking of you. Thinking of " +vacationMemories[i]); i = Math.floor(Math.random()*vacationMemories.length-1);}
}}

