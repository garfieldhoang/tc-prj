/// # VARS ///
///

var SLP_1 = document.getElementById('SLP_1')
var SLP_2 = document.getElementById('SLP_2')
var LEV = document.getElementById('LEV')

var Vol_1_ori = document.getElementById('Vol_1_ori')
var Vol_2_ori = document.getElementById('Vol_2_ori')
var result_R = document.getElementById('result_R')
var result_RS = document.getElementById('result_RS')
var result_sumVol = document.getElementById('result_sumVol')

var Vol_1 = document.getElementById('Vol_1')
var Vol_2 = document.getElementById('Vol_2')

var SLu_1 = document.getElementById('SLu_1')
var SLu_2 = document.getElementById('SLu_2')

var SLP_1Val = 0, SLP_2Val = 0
var LEVVal, result_RVal, result_RSVal, Vol_1Val, Vol_2Val, SLu_1Val, SLu_2Val


var Entry_1 = document.getElementById('Entry_1')
var Entry_2 = document.getElementById('Entry_2')
var result_newEntry = document.getElementById('result_newEntry')

var Entry_1Val, Entry_2Val, result_newEntryVal


/// ###############
/// # FUNCTIONS ///
///

function mR(num) {
    num = Math.round(num*1000)/1000
    return num
}

function main() {
    result_R.innerText = `${mR(SLP_1Val/SLP_2Val)}`
    result_RS.innerText = `${mR((SLP_1Val/SLP_2Val)*(SLu_2Val/SLu_1Val))}`

    Vol_1Val = SLu_1Val/(SLP_1Val/100)
    Vol_2Val = SLu_2Val/(SLP_2Val/100)

    Vol_1.innerText = `${mR(Vol_1Val)}`
    Vol_2.innerText = `${mR(Vol_2Val)}`
    // Vol_2Val
    Vol_1_ori.innerText = `${mR(Vol_1Val/LEVVal)}`
    Vol_2_ori.innerText = `${mR(Vol_2Val/LEVVal)}`

    result_sumVol.innerText = `${mR(Vol_1Val+Vol_2Val)}`

    // 2+(1-2)/(1+(v2/v1))
    result_newEntryVal = Entry_2Val+(Entry_1Val-Entry_2Val)/(1+(Vol_2Val/Vol_1Val))
    result_newEntry.innerText = `${mR(result_newEntryVal)}`
}

function beMain(x, y) {
    x.oninput = function() {
        eval(`${y} = Number(this.value)`)
        main()
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


// SLP_1.oninput = function() {
//     SLP_1Val = Number(this.value)
//     main()
// }

// SLP_2.oninput = function() {
//     SLP_2Val = Number(this.value)
//     main()
// }

// ######

    // result_R.innerText = `${Math.round(SLP_1Val*1000)/1000}`

    // S2val = Number(this.value)
    // S2.value = this.value
    // console.log(SLP_1Val)
    // main()
// }

// S2.oninput = function() {
//     S2val = Number(this.value)
//     console.log(S2val)
//     main()
// }

// G1.oninput = function() {
//     G1val = Number(this.value)
//     console.log(G1val)
//     main()
// }

// G2.oninput = function() {
//     G2val = Number(this.value)
//     console.log(G2val)
//     main()
// }