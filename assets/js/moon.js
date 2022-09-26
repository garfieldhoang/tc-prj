var slider = document.getElementById("myRange");
var output = document.getElementById("levVal");

var fRes = document.getElementById("js-res");
var fResBig = document.getElementById("js-res--big");

var sl = document.querySelector('.input-box__sl input');
var slu = document.querySelector('.input-box__u input');
var levXinput = document.querySelector('.input-box__lev > input');

var slVal, sluVal, levXinputVal, fResBigVal, part;

var sl_m01 = document.getElementById("sl_m01");
var sl_m001 = document.getElementById("sl_m001");
var sl_p001 = document.getElementById("sl_p001");
var sl_p01 = document.getElementById("sl_p01");
var slu_m5 = document.getElementById("slu_m5");
var slu_m1 = document.getElementById("slu_m1");
var slu_p1 = document.getElementById("slu_p1");
var slu_p5 = document.getElementById("slu_p5");

// order: 3-3-2-1

output.innerHTML = 50;
sluVal = 70;
fResBigVal = Math.round((sluVal/0.8)*1000)/1000;


// PART - 1 - 2
sl.oninput = function() {
    slVal = this.value;
    part = 1;
    console.log(slVal);
    main();
}

slu.oninput = function() {
    sluVal = this.value;
    part = 2;
    main();
}


///
///
//// functions

function main() {
    switch (part) {
        case 1:
            fResVal = Math.round((80/slVal)*10000)/10000;
            break;
        case 2:
            fResBigVal = Math.round((sluVal/0.8)*10000)/10000;
            break;            
    }
    
    fRes.innerHTML = fResVal;    
    fResBig.innerHTML = fResBigVal;
}


function btnCopy() {
    console.log(fResVal);
    navigator.clipboard.writeText(fResBigVal);
};


sl_m01.addEventListener("click", function()
    {sl.value = Math.round((slVal - 0.1)*10000)/10000; slVal = sl.value; part = 1; main();});
sl_m001.addEventListener("click", function()
    {sl.value = Math.round((slVal - 0.01)*10000)/10000; slVal = sl.value; part = 1; main();});
sl_p001.addEventListener("click", function()
    {sl.value = Math.round((Number(slVal) + 0.01)*10000)/10000; slVal = sl.value; part = 1; main();});
sl_p01.addEventListener("click", function()
    {sl.value = Math.round((Number(slVal) + 0.1)*10000)/10000; slVal = sl.value; part = 1; main();});

slu_m5.addEventListener("click", function()
    {slu.value = Math.round((sluVal - 5)*10000)/10000; sluVal = slu.value; part = 2; main();});
slu_m1.addEventListener("click", function()
    {slu.value = Math.round((sluVal - 1)*10000)/10000; sluVal = slu.value; part = 2; main();});
slu_p1.addEventListener("click", function()
    {slu.value = Math.round((Number(sluVal) + 1)*10000)/10000; sluVal = slu.value; part = 2; main();});
slu_p5.addEventListener("click", function()
    {slu.value = Math.round((Number(sluVal) + 5)*10000)/10000; sluVal = slu.value; part = 2; main();});