var slider = document.getElementById("myRange");
var output = document.getElementById("levVal");

var fRes = document.getElementById("js-res");
var fResBig = document.getElementById("js-res--big");

var sl = document.querySelector('.input-box__sl > input');
var slu = document.querySelector('.input-box__u > input');
var levXinput = document.querySelector('.input-box__lev > input');

var slVal, sluVal, levXinputVal, fResBigVal, part;


// order: 3-3-2-1

output.innerHTML = 50;
sluVal = 70;


// PART - 1
slider.oninput = function() {
    output.innerHTML = this.value;
    levXinput.value = this.value;
    part = 1;
    main();
}

// PART - 2
levXinput.oninput = function() {
    levXinputVal = this.value;
    output.innerHTML = this.value;
    slider.value = this.value;
    part = 2;
    main();
}

// PART - 3
slu.oninput = function() {
    sluVal = this.value;
    part = 3;
    main();
}

sl.oninput = function() {
    slVal = this.value;
    part = 3;
    console.log(slVal);
    main();
}


///
///
//// functions

function main() {
    switch (part) {
        case 1:
            fResVal = Math.round((sluVal/(slVal/100))/slider.value*10000)/10000;
            fResBigVal = Math.round(fResVal*slider.value*1000)/1000;
            break;
        case 2:
            fResVal = Math.round((sluVal/(slVal/100))/levXinputVal*10000)/10000;
            fResBigVal = Math.round(fResVal*levXinputVal*1000)/1000;
            break;
        case 3:
            fResVal = Math.round((sluVal/(slVal/100))/output.innerText*10000)/10000;
            fResBigVal = Math.round(fResVal*output.innerText*1000)/1000;
            break;
    }
    
    fRes.innerHTML = fResVal;    
    fResBig.innerHTML = fResBigVal;
}


function btnCopy() {
    console.log(fResVal);
    navigator.clipboard.writeText(fResVal*slider.value);
};