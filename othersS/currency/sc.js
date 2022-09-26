var buyU = document.querySelector('#buyU');
var sellU = document.querySelector('#sellU');
var VND = document.querySelector('#VND');
var RUB = document.querySelector('#RUB');

var buyUVal, sellUVal, VNDVal, RUBVal;

buyUVal = buyU.value;
sellUVal = sellU.value;

console.log(buyUVal);

buyU.oninput = function(){
	buyUVal = this.value;
}

sellU.oninput = function(){
	sellUVal = this.value;
}

VND.oninput = function(){
	VNDVal = this.value;
	RUB.value = Math.round((VNDVal/buyUVal*sellUVal)*100)/100;
}

RUB.oninput = function(){
	RUBVal = this.value;
	VND.value = RUBVal/sellUVal*buyUVal;
}