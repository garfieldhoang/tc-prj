/// # glb fx # ///
///

function cl(x) {
    console.log(x)
}

/// # VARS ///
///

var SLP_1 = document.getElementById('SLP_1')
var SLP_2 = document.getElementById('SLP_2')
var LEV = document.getElementById('LEV')

var Vol_1_ori = document.getElementById('Vol_1_ori')
var Vol_2_ori = document.getElementById('Vol_2_ori')
var result_R = document.getElementById('result_R')
var result_RS = document.getElementById('result_RS')

var result_sumVolOri = document.getElementById('result_sumVolOri')
var result_sumVol = document.getElementById('result_sumVol')

var Vol_1 = document.getElementById('Vol_1')
var Vol_2 = document.getElementById('Vol_2')

var SLu_1 = document.getElementById('SLu_1')
var SLu_2 = document.getElementById('SLu_2')

var SLP_1Val = 0, SLP_2Val = 0
var LEVVal, result_RVal, result_RSVal, Vol_1Val, Vol_2Val, SLu_1Val, SLu_2Val


var Entry_1 = document.getElementById('Entry_1')
var Entry_2 = document.getElementById('Entry_2')
var SL = document.getElementById('SL')
var result_rate0_1 = document.getElementById('result_rate0_1')
var result_newEntry = document.getElementById('result_newEntry')

var Entry_1Val, Entry_2Val, SLVal, result_newEntryVal, result_rate0_1Val

var btns = document.querySelectorAll('.btn')
var btnsClass = document.querySelectorAll('.btns')
var logo = document.querySelector('.logo')


// Default Values
LEV.value = LEVVal = 20


/// ###############
/// # FUNCTIONS ///
///

/// ## btns ## ///

logo.addEventListener("click", function() {
    if (!btnsClass[0].classList.contains('dp_none')) {
        btnsClass[0].classList.add('dp_none')
        btnsClass[1].classList.add('dp_none')
        btnsClass[2].classList.add('dp_none')
    } else {
        btnsClass[0].classList.remove('dp_none')
        btnsClass[1].classList.remove('dp_none')        
        btnsClass[2].classList.remove('dp_none')
    }
});

// SLu_1
btns[0].addEventListener("click", () => btnReCalc(1, 'SLu_1'))
btns[1].addEventListener("click", () => btnReCalc(-1, 'SLu_1'))
btns[4].addEventListener("click", () => btnReCalc(5, 'SLu_1'))
btns[5].addEventListener("click", () => btnReCalc(-5, 'SLu_1'))
btns[8].addEventListener("click", () => btnReCalc(10, 'SLu_1'))
btns[9].addEventListener("click", () => btnReCalc(-10, 'SLu_1'))

// SLu_2
btns[2].addEventListener("click", () => btnReCalc(1, 'SLu_2'))
btns[3].addEventListener("click", () => btnReCalc(-1, 'SLu_2'))
btns[6].addEventListener("click", () => btnReCalc(5, 'SLu_2'))
btns[7].addEventListener("click", () => btnReCalc(-5, 'SLu_2'))
btns[10].addEventListener("click", () => btnReCalc(10, 'SLu_2'))
btns[11].addEventListener("click", () => btnReCalc(-10, 'SLu_2'))

function btnReCalc(x, y) {
    eval(`${y}.value = Number(${y}.value) + Number(x)`)
    eval(`${y}Val = ${y}.value`)
    main()
}

/// ## MAIN ## ///

function percentCalc(a, b) {
    return Math.abs((b - a)/a*100)
}

function mR(num) {
    num = Math.round(num*1000)/1000
    return num
}

function mRs(num, i) {
    i = Math.pow(10, i)

    num = Math.round(num*i)/i
    return num   
}

function main(x) {
    result_R.innerText = `${mR(SLP_1Val/SLP_2Val)}`
    result_RS.innerText = `${mR((SLP_1Val/SLP_2Val)*(SLu_2Val/SLu_1Val))}`

    Vol_1Val = SLu_1Val/(SLP_1Val/100)
    Vol_2Val = SLu_2Val/(SLP_2Val/100)

    Vol_1.innerText = `${mR(Vol_1Val)}`
    Vol_2.innerText = `${mR(Vol_2Val)}`
    // Vol_2Val
    Vol_1_ori.innerText = `${mR(Vol_1Val/LEVVal)}`
    Vol_2_ori.innerText = `${mR(Vol_2Val/LEVVal)}`

    result_sumVolOri.innerText = `${mR((Vol_1Val+Vol_2Val)/LEVVal)}`
    result_sumVol.innerText = `${mR(Vol_1Val+Vol_2Val)}`

    // 2+(1-2)/(1+(v2/v1))
    result_newEntryVal = Entry_2Val+(Entry_1Val-Entry_2Val)/(1+(Vol_2Val/Vol_1Val))
    result_newEntry.innerText = `${mR(result_newEntryVal)}`

    result_rate0_1Val = 0 + 1/(1+(Vol_2Val/Vol_1Val))
    result_rate0_1.innerText = `${mR(result_rate0_1Val)}`

    // cl(percentCalc(Entry_1Val, SLVal))
    if (x === 'Entry_1Val') {
        SLP_1Val = SLP_1.value = mRs(percentCalc(Entry_1Val, SLVal), 2)
    } else if (x === 'Entry_2Val') {
        SLP_2Val = SLP_2.value = mRs(percentCalc(Entry_2Val, SLVal), 2)
    } else if (x === 'SLVal') {
        SLP_1Val = SLP_1.value = mRs(percentCalc(Entry_1Val, SLVal), 2)
        SLP_2Val = SLP_2.value = mRs(percentCalc(Entry_2Val, SLVal), 2)
    }
}

function beMain(x, y) {
    x.oninput = function() {
        eval(`${y} = Number(this.value)`)
        main(y)
    }
}


/// BEGIN ///
///

beMain(SLP_1, 'SLP_1Val')
beMain(SLP_2, 'SLP_2Val')
beMain(LEV, 'LEVVal')
beMain(SLu_1, 'SLu_1Val')
beMain(SLu_2, 'SLu_2Val')

beMain(Entry_1, 'Entry_1Val')
beMain(Entry_2, 'Entry_2Val')
beMain(SL, 'SLVal')