var currentNum = document.querySelector("#display");
var nums="";
var clear = document.querySelector('#clear');
var storeNum="";
var currentFunction = 0;
var canOperate = true;

var numArray = document.querySelectorAll(".number");


  var colorDelay = function(){
      setTimeout(function(){
        this.style.backgroundColor="rgb(232,232,232)";
      },2000);
    };

//create string of numbers from input
var test = function(){
  nums = nums+this.innerHTML;
  currentNum.innerHTML=nums;
  console.log(nums);
  // this.style.backgroundColor="grey";
};

for (var i = 0; i < numArray.length; i++){
numArray[i].addEventListener('click',test);
// numArray[i].addEventListener('click',colorDelay);
}

//clear function
var empty = function(){
  nums ="";
  storeNum ="";
  currentNum.innerHTML = 0;
  console.log(nums);
};



clear.addEventListener('click',empty);

//add button and function xxxxxxxxxxxxxxxxxxxxxx
var plus = document.querySelector('#plus');

var addition = function(){
  if (canOperate===true){
  storeNum = nums;
  nums = "";
  currentNum.innerHTML = 0;
  currentFunction = 0;
}
  // canOperate=false;
// } else {
//   currentNum.innerHTML = "ERROR";
//   nums = "";
//   canOperate=true;
//   }
};

plus.addEventListener('click',addition);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//subtract button and function xxxxxxxxxxxxxxxxxxxxxx
var minus = document.querySelector('#minus');

var subtract = function(){
  storeNum = nums;
  nums = "";
  currentNum.innerHTML = 0;
  currentFunction = 1;
};
minus.addEventListener('click',subtract);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//multiply button and function xxxxxxxxxxxxxxxxxxxxxx
var times = document.querySelector('#times');

var multiply = function(){
  storeNum = nums;
  nums = "";
  currentNum.innerHTML = 0;
  currentFunction = 2;
};
times.addEventListener('click',multiply);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//multiply button and function xxxxxxxxxxxxxxxxxxxxxx
var divide = document.querySelector('#divide');

var division = function(){
  storeNum = nums;
  nums = "";
  currentNum.innerHTML = 0;
  currentFunction = 3;
};

divide.addEventListener('click',division);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//decimal button and function xxxxxxxxxxxxxxxxxxxxxxxxxx
var point = document.querySelector('#point');

var decimal = function(){
  nums = nums+".";
  currentNum.innerHTML = nums;
};

point.addEventListener('click',decimal);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//evaluate at the press of equal
var equal = document.querySelector('#equal');

var evalu = function(){
  if (currentFunction === 0){
  nums = parseFloat(storeNum) + parseFloat(nums);
  currentNum.innerHTML = nums;
  } else if (currentFunction === 1){
    nums = parseFloat(storeNum) - parseFloat(nums);
    currentNum.innerHTML = nums;
  } else if (currentFunction === 2){
    nums = parseFloat(storeNum) * parseFloat(nums);
    currentNum.innerHTML = nums;
  } else if (currentFunction === 3){
    nums = parseFloat(storeNum) / parseFloat(nums);
    currentNum.innerHTML = nums;
  }
  canOperate=true;
};

equal.addEventListener('click',evalu);
