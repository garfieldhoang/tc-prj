/// # glb fx # ///
///

function cl(x) {
  console.log(x);
}

/// # VARS ///
///

var SLP_1 = document.getElementById("SLP_1");
var SLP_2 = document.getElementById("SLP_2");
var SLP_3 = document.getElementById("SLP_3");
var LEV = document.getElementById("LEV");

var Vol_1_ori = document.getElementById("Vol_1_ori");
var Vol_2_ori = document.getElementById("Vol_2_ori");
var Vol_3_ori = document.getElementById("Vol_3_ori");
var result_R = document.getElementById("result_R");
var result_RS = document.getElementById("result_RS");

var result_sumVolOri = document.getElementById("result_sumVolOri");
var result_sumVol = document.getElementById("result_sumVol");

var Vol_1 = document.getElementById("Vol_1");
var Vol_2 = document.getElementById("Vol_2");
var Vol_3 = document.getElementById("Vol_3");

var SLu_1 = document.getElementById("SLu_1");
var SLu_2 = document.getElementById("SLu_2");
var SLu_3 = document.getElementById("SLu_3");

var SLP_1Val = 0,
  SLP_2Val = 0;
SLP_3Val = 0;
var LEVVal,
  result_RVal,
  result_RSVal,
  rrNewVal,
  Vol_1Val,
  Vol_2Val,
  Vol_3Val,
  SLu_1Val,
  SLu_2Val,
  SLu_3Val;

var Entry_1 = document.getElementById("Entry_1");
var Entry_2 = document.getElementById("Entry_2");
var Entry_3 = document.getElementById("Entry_3");
var SL = document.getElementById("SL");
var TP = document.getElementById("TP");
var result_rate0_1 = document.getElementById("result_rate0_1");
var result_newEntry = document.getElementById("result_newEntry");
var rrNew = document.getElementById("rrNew");

var Entry_1Val,
  Entry_2Val,
  Entry_3Val,
  SLVal,
  result_newEntryVal,
  result_rate0_1Val;

var btns = document.querySelectorAll(".btn");
var btnsClass = document.querySelectorAll(".btns");
var logo = document.querySelector(".logo");

var reCalcBtn = document.querySelector(".fxBtnsCont_btn_1");
var cpyBtn = document.querySelector(".fxBtnsCont_btn_2");

var cpyBtn_inputBox3class = document.querySelectorAll(".cpyBtn_inputBox3class");

var cpyBtnRealNEntry = document.querySelector("#cpyBtnRealNEntry");

// Default Values
LEV.value = LEVVal = 20;

/// ###############
/// # FUNCTIONS ///
///

/// ## btns ## ///

// cpys
Vol_1.addEventListener("click", () =>
  navigator.clipboard.writeText(mR(Vol_1Val))
);
Vol_2.addEventListener("click", () =>
  navigator.clipboard.writeText(mR(Vol_2Val))
);

result_newEntry.addEventListener("click", () =>
  navigator.clipboard.writeText(mR(result_newEntryVal))
);

reCalcBtn.addEventListener("click", () => {
  reCalc();
});

cpyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `${Entry_1Val} / ${Entry_2Val} - ${SLVal} / ${TP.value} ${
      SLu_1Val + SLu_2Val
    }U ${mR(result_newEntryVal)}`
  );
});

cpyBtn_inputBox3class[0].addEventListener("click", () =>
  navigator.clipboard.writeText(mR(Entry_1Val))
);
cpyBtn_inputBox3class[1].addEventListener("click", () =>
  navigator.clipboard.writeText(mR(Entry_2Val))
);
//
// cpyBtn_inputBox3class[2] here

cpyBtn_inputBox3class[3].addEventListener("click", () =>
  navigator.clipboard.writeText(mR(SLVal))
);
cpyBtn_inputBox3class[4].addEventListener("click", () =>
  navigator.clipboard.writeText(mR(TP.value))
);

cpyBtnRealNEntry.addEventListener("click", () =>
  navigator.clipboard.writeText(mR5(result_newEntryVal))
);

// main

logo.addEventListener("click", function () {
  if (!btnsClass[0].classList.contains("dp_none")) {
    btnsClass[0].classList.add("dp_none");
    btnsClass[1].classList.add("dp_none");
    btnsClass[2].classList.add("dp_none");
    btnsClass[3].classList.add("dp_none");
    btnsClass[4].classList.add("dp_none");
  } else {
    btnsClass[0].classList.remove("dp_none");
    btnsClass[1].classList.remove("dp_none");
    btnsClass[2].classList.remove("dp_none");
    btnsClass[3].classList.remove("dp_none");
    btnsClass[4].classList.remove("dp_none");
  }
});

// SLu_1
btns[0].addEventListener("click", () => btnReCalc(1, "SLu_1"));
btns[1].addEventListener("click", () => btnReCalc(-1, "SLu_1"));
btns[4].addEventListener("click", () => btnReCalc(5, "SLu_1"));
btns[5].addEventListener("click", () => btnReCalc(-5, "SLu_1"));
btns[8].addEventListener("click", () => btnReCalc(10, "SLu_1"));
btns[9].addEventListener("click", () => btnReCalc(-10, "SLu_1"));

// SLu_2
btns[2].addEventListener("click", () => btnReCalc(1, "SLu_2"));
btns[3].addEventListener("click", () => btnReCalc(-1, "SLu_2"));
btns[6].addEventListener("click", () => btnReCalc(5, "SLu_2"));
btns[7].addEventListener("click", () => btnReCalc(-5, "SLu_2"));
btns[10].addEventListener("click", () => btnReCalc(10, "SLu_2"));
btns[11].addEventListener("click", () => btnReCalc(-10, "SLu_2"));

function btnReCalc(x, y) {
  eval(`${y}.value = Number(${y}.value) + Number(x)`);
  eval(`${y}Val = ${y}.value`);
  main();
}

/// ## MAIN ## ///

function percentCalc(a, b) {
  return Math.abs(((b - a) / a) * 100);
}

function mR(num) {
  num = Math.round(num * 1000) / 1000;
  return num;
}

function mR2(num) {
  num = Math.round(num * 100) / 100;
  return num;
}

function mR5(num) {
  num = Math.round(num * 100000) / 100000;
  return num;
}

function mRs(num, i) {
  i = Math.pow(10, i);

  num = Math.round(num * i) / i;
  return num;
}

function main(x) {
  // result_R.innerText = `${mR(SLP_1Val/SLP_2Val)}`
  // result_RS.innerText = `${mR((SLP_1Val/SLP_2Val)*(SLu_2Val/SLu_1Val))}`

  // Vol_1Val = SLu_1Val/(SLP_1Val/100)
  // Vol_2Val = SLu_2Val/(SLP_2Val/100)

  // Vol_1.innerText = `${mR(Vol_1Val)}`
  // Vol_2.innerText = `${mR(Vol_2Val)}`
  // // Vol_2Val
  // Vol_1_ori.innerText = `${mR(Vol_1Val/LEVVal)}`
  // Vol_2_ori.innerText = `${mR(Vol_2Val/LEVVal)}`

  // result_sumVolOri.innerText = `${mR((Vol_1Val+Vol_2Val)/LEVVal)}`
  // result_sumVol.innerText = `${mR(Vol_1Val+Vol_2Val)}`

  // // 2+(1-2)/(1+(v2/v1))
  // result_newEntryVal = Entry_2Val+(Entry_1Val-Entry_2Val)/(1+(Vol_2Val/Vol_1Val))
  // result_newEntry.innerText = `${mR(result_newEntryVal)}`

  // result_rate0_1Val = 0 + 1/(1+(Vol_2Val/Vol_1Val))
  // result_rate0_1.innerText = `${mR(result_rate0_1Val)}`

  reCalc();

  // cl(percentCalc(Entry_1Val, SLVal))
  if (x === "Entry_1Val") {
    SLP_1Val = SLP_1.value = mRs(percentCalc(Entry_1Val, SLVal), 2);
  } else if (x === "Entry_2Val") {
    SLP_2Val = SLP_2.value = mRs(percentCalc(Entry_2Val, SLVal), 2);
  } else if (x === "Entry_3Val") {
    SLP_3Val = SLP_3.value = mRs(percentCalc(Entry_3Val, SLVal), 2);
  } else if (x === "SLVal") {
    SLP_1Val = SLP_1.value = mRs(percentCalc(Entry_1Val, SLVal), 2);
    SLP_2Val = SLP_2.value = mRs(percentCalc(Entry_2Val, SLVal), 2);
    SLP_3Val = SLP_3.value = mRs(percentCalc(Entry_3Val, SLVal), 2);
  }
}

function beMain(x, y) {
  x.oninput = function () {
    eval(`${y} = Number(this.value)`);
    main(y);
  };
}

/// BEGIN ///
///

beMain(SLP_1, "SLP_1Val");
beMain(SLP_2, "SLP_2Val");
beMain(SLP_3, "SLP_3Val");
beMain(LEV, "LEVVal");
beMain(SLu_1, "SLu_1Val");
beMain(SLu_2, "SLu_2Val");
beMain(SLu_3, "SLu_3Val");

beMain(Entry_1, "Entry_1Val");
beMain(Entry_2, "Entry_2Val");
beMain(Entry_3, "Entry_3Val");
beMain(SL, "SLVal");

const reCalc = () => {
  result_R.innerText = `${mR(SLP_1Val / SLP_2Val)}`;
  result_RS.innerText = `${mR((SLP_1Val / SLP_2Val) * (SLu_2Val / SLu_1Val))}`;

  Vol_1Val = SLu_1Val / (SLP_1Val / 100);
  Vol_2Val = SLu_2Val / (SLP_2Val / 100);
  Vol_3Val = SLu_3Val / (SLP_3Val / 100);

  Vol_1.innerText = `${mR(Vol_1Val)}`;
  Vol_2.innerText = `${mR(Vol_2Val)}`;
  Vol_3.innerText = `${mR(Vol_3Val)}`;
  // Vol_2Val
  Vol_1_ori.innerText = `${mR(Vol_1Val / LEVVal)}`;
  Vol_2_ori.innerText = `${mR(Vol_2Val / LEVVal)}`;
  Vol_3_ori.innerText = `${mR(Vol_3Val / LEVVal)}`;

  result_sumVolOri.innerText = `${mR(
    (Vol_1Val + Vol_2Val + Vol_3Val) / LEVVal
  )}`;
  result_sumVol.innerText = `${mR(Vol_1Val + Vol_2Val + Vol_3Val)}`;

  // NEED TO FIX HERE TO GET VAL3
  // 2+(1-2)/(1+(v2/v1))
  result_newEntryVal =
    Entry_2Val + (Entry_1Val - Entry_2Val) / (1 + Vol_2Val / Vol_1Val);
  result_newEntry.innerText = `${mR(result_newEntryVal)}`;

  result_rate0_1Val = 0 + 1 / (1 + Vol_2Val / Vol_1Val);
  result_rate0_1.innerText = `${mR(result_rate0_1Val)}`;

  rrNewVal =
    Math.abs(TP.value - result_newEntryVal) /
    Math.abs(result_newEntryVal - SLVal);
  rrNew.innerText = `${mR2(rrNewVal)}`;

  checkLorS();
};

function checkLorS() {
  var sls2CheckSec__SL1,
    sls2CheckSec__SL2,
    sls2CheckSec__SL1_calc,
    sls2CheckSec__SL2_calc,
    sls2CheckSec__SL3,
    sls2CheckSec__SL3_calc;

  let isLong;
  isLong = Entry_1Val > SLVal ? true : false;

  sls2CheckSec__SL1 = mRs(Vol_1Val, 3);
  sls2CheckSec__SL2 = mRs(Vol_2Val, 3);
  sls2CheckSec__SL3 = mRs(Vol_3Val, 3);

  if (isLong) {
    sls2CheckSec__SL1_calc = mRs(Vol_1Val - SLu_1Val, 3);
    sls2CheckSec__SL2_calc = mRs(Vol_2Val - SLu_2Val, 3);
    sls2CheckSec__SL3_calc = mRs(Vol_3Val - SLu_3Val, 3);
  } else {
    sls2CheckSec__SL1_calc = mRs(Vol_1Val + SLu_1Val, 3);
    sls2CheckSec__SL2_calc = mRs(Vol_2Val + SLu_2Val, 3);
    sls2CheckSec__SL3_calc = mRs(Vol_3Val + SLu_3Val, 3);
  }

  sessionStorage.setItem(
    "isLong",
    JSON.stringify({
      sls2CheckSec__SL1: sls2CheckSec__SL1,
      sls2CheckSec__SL2: sls2CheckSec__SL2,
      sls2CheckSec__SL1_calc: sls2CheckSec__SL1_calc,
      sls2CheckSec__SL2_calc: sls2CheckSec__SL2_calc,
      sls2CheckSec__SL3: sls2CheckSec__SL3,
      sls2CheckSec__SL3_calc: sls2CheckSec__SL3_calc,
    })
  );

  console.log(JSON.parse(sessionStorage.getItem("isLong")));
}
