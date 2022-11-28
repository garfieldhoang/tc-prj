var S1 = document.querySelector('#S1')
var S2 = document.querySelector('#S2')
var G1 = document.querySelector('#G1')
var G2 = document.querySelector('#G2')
var resultH1 = document.querySelector('#result > h1')

var S1val, S2val, G1val, G2val, res

function main() {
	if (S1val === S2val) {
        res = (G1val + G2val) / 2
        // res = Math.round(((G1val + G2val) / 2)*10000)/10000
	} else if (S1val < S2val) {
        //  ABS(G1 - G2) / (S1 + S2) * S1
        res = Math.abs(G1val - G2val) / (S1val + S2val) * S1val
    } else {
        res = Math.abs(G1val - G2val) / (S1val + S2val) * S2val
    }
	
    res = Math.round(res*10000)/10000

    console.log(`Res: ${res}`)
    if (res === undefined || Number.isNaN(res) === true) {
        resultH1.innerHTML = "------"
    } else {
        resultH1.innerHTML = res
    }
}

S1.oninput = function() {
    S1val = Number(this.value)
    
    S2val = Number(this.value)
    S2.value = this.value
    console.log(S1val)
    main()
}

S2.oninput = function() {
    S2val = Number(this.value)
    console.log(S2val)
    main()
}

G1.oninput = function() {
    G1val = Number(this.value)
    console.log(G1val)
    main()
}

G2.oninput = function() {
    G2val = Number(this.value)
    console.log(G2val)
    main()
}