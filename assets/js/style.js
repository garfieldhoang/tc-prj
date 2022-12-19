var slider = document.getElementById("myRange");
var output = document.getElementById("levVal");

var fRes = document.getElementById("js-res");
var fResBig = document.getElementById("js-res--big");

var sl = document.querySelector('.input-box__sl > input');
var slu = document.querySelector('.input-box__u > input');
var levXinput = document.querySelector('.input-box__lev > input');

var slVal, sluVal, levXinputVal, fResBigVal, part;

var footer_entry = document.getElementById('footer_entry')
var footer_sl = document.getElementById('footer_sl') 

var footer_entryVal, footer_slVal


// ###
function cl(x) {
    console.log(x)
}

// order: 3-3-2-1

levXinput.value = output.innerHTML = 50;
slu.value = sluVal = 70;


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
    main();
}

footer_entry.oninput = function() {
    footer_entryVal = this.value
    main('footer_entry')
}

footer_sl.oninput = function() {
    footer_slVal = this.value
    main('footer_sl')
}

///
///
//// functions

function main(x) {
    if (x === 'footer_entry' || x === 'footer_sl') {
        slVal = sl.value = prcCalc(footer_entryVal, footer_slVal)
        part = 3
    }

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


function mRs(num, i) {
    i = Math.pow(10, i)

    return Math.round(num*i)/i
}

function prcCalc(a, b) {
    return mRs(Math.abs((a-b)/a*100), 2)
}


function btnCopy() {
    console.log(fResVal);
    navigator.clipboard.writeText(fResVal*slider.value);
};