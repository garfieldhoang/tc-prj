var slider = document.getElementById("myRange");
var output = document.getElementById("levVal");

var fRes = document.getElementById("js-res");
var fResBig = document.getElementById("js-res--big");

var sl = document.querySelector(".input-box__sl > input");
var slu = document.querySelector(".input-box__u > input");
var levXinput = document.querySelector(".input-box__lev > input");

var slVal, sluVal, levXinputVal, fResBigVal, part;

var footer_entry = document.getElementById("footer_entry");
var footer_sl = document.getElementById("footer_sl");
var footer_tp = document.getElementById("footer_tp");

var footer_entryVal, footer_slVal;

var logo = document.querySelector(".logo");

var btns_upAndDown_area = document.querySelectorAll(".btns_upAndDown_area");

var btn_uad_01 = document.getElementById("btn_uad_01");
var btn_uad_02 = document.getElementById("btn_uad_02");
var btn_uad_03 = document.getElementById("btn_uad_03");
var btn_uad_04 = document.getElementById("btn_uad_04");
var btn_uad_05 = document.getElementById("btn_uad_05");
var btn_uad_06 = document.getElementById("btn_uad_06");

var toMoon = document.getElementById("toMoon");

// toMoon
toMoon.addEventListener("click", () => {
  footer_entry.value = footer_entry.value.replaceAll(".", ",");
  footer_sl.value = footer_sl.value.replaceAll(".", ",");
  footer_tp.value = footer_tp.value.replaceAll(".", ",");
  fResBig.innerHTML = fResBig.innerHTML.replaceAll(".", ",");
});

// btns
btn_uad_01.addEventListener("click", () => btnReCalc(1, "slu"));
btn_uad_02.addEventListener("click", () => btnReCalc(5, "slu"));
btn_uad_03.addEventListener("click", () => btnReCalc(10, "slu"));

btn_uad_04.addEventListener("click", () => btnReCalc(-1, "slu"));
btn_uad_05.addEventListener("click", () => btnReCalc(-5, "slu"));
btn_uad_06.addEventListener("click", () => btnReCalc(-10, "slu"));

function btnReCalc(x, y) {
  eval(`${y}.value = Number(${y}.value) + Number(x)`);
  eval(`${y}Val = ${y}.value`);
  main("btn_uad");
}

// ###
function cl(x) {
  console.log(x);
}

// order: 3-3-2-1

sl.value = slVal = 1;
levXinputVal = levXinput.value = output.innerHTML = 20;
slu.value = sluVal = 40;

// PART - 1
slider.oninput = function () {
  output.innerHTML = this.value;
  levXinput.value = this.value;
  part = 1;
  main();
};

// PART - 2
levXinput.oninput = function () {
  levXinputVal = this.value;
  output.innerHTML = this.value;
  slider.value = this.value;
  part = 2;
  main();
};

// PART - 3
slu.oninput = function () {
  sluVal = this.value;
  part = 3;
  main();
};

sl.oninput = function () {
  slVal = this.value;
  part = 3;
  main();
};

footer_entry.oninput = function () {
  footer_entryVal = this.value;
  main("footer_entry");
};

footer_sl.oninput = function () {
  footer_slVal = this.value;
  main("footer_sl");
};

///
///
//// functions

function main(x) {
  if (x === "footer_entry" || x === "footer_sl") {
    slVal = sl.value = prcCalc(footer_entryVal, footer_slVal);
    part = 3;
  } else if (x === "btn_uad") {
    part = 3;
  }

  switch (part) {
    case 1:
      fResVal =
        Math.round((sluVal / (slVal / 100) / slider.value) * 10000) / 10000;
      fResBigVal = Math.round(fResVal * slider.value * 1000) / 1000;
      break;
    case 2:
      fResVal =
        Math.round((sluVal / (slVal / 100) / levXinputVal) * 10000) / 10000;
      fResBigVal = Math.round(fResVal * levXinputVal * 1000) / 1000;
      break;
    case 3:
      fResVal =
        Math.round((sluVal / (slVal / 100) / output.innerText) * 10000) / 10000;
      fResBigVal = Math.round(fResVal * output.innerText * 1000) / 1000;
      break;
  }

  fRes.innerHTML = fResVal;
  fResBig.innerHTML = fResBigVal;
}

function mRs(num, i) {
  i = Math.pow(10, i);

  return Math.round(num * i) / i;
}

function prcCalc(a, b) {
  return mRs(Math.abs(((a - b) / a) * 100), 2);
}

function btnCopy() {
  console.log(fResVal);
  navigator.clipboard.writeText(fResVal * slider.value);
}

function addDpNone(x) {
  if (x.classList.contains("dp_none")) {
    x.classList.remove("dp_none");
  } else {
    x.classList.add("dp_none");
  }
}

var bnt_esl = document.querySelector(".btn-esl");

bnt_esl.addEventListener("click", function () {
  addDpNone(footer_entry);
  addDpNone(footer_sl);
  addDpNone(footer_tp);
});

logo.addEventListener("click", function () {
  addDpNone(btns_upAndDown_area[0]);
  addDpNone(btns_upAndDown_area[1]);
});

console.log("hey!");
