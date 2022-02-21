//sorting algorithm visualized

let arr = [];
let bWidth; //width of boxes
let bSpacing;
let nums = 50;  //amt of numbers in array

function setup() {
  createCanvas(400, 400);
  background(100);
  noStroke();
  
  bSpacing = (width / nums) / 4;
  bWidth = bSpacing * 2;

  for(let i = 1; i <= nums; i++){
    arr[i - 1] = i;
  }

  circle(10, 10 , 10);
  rect(10, 10, 10, 10);
  
  shuffleArr();
  

  var x = bSpacing;
  var growthfactor = height / nums - 1.5;
  for(let i = 0; i < arr.length; i++){
    
    let num = arr[i];
    num *= growthfactor;
    rect(x, (height - 50) - num, bWidth, num);
    let c = color(0, num, 0);
    fill(c);
    x+= width / nums;
  }
  


  button = createButton('click me');
  button.position(width / 2, height - 30);

  string = '';
  for(let i = 0; i< arr.length; i++){
    string += arr[i] + ', ';
  }
  console.log(string);

  selectionSort();

  string2 = '';
  for(let i = 0; i< arr.length; i++){
    string2 += arr[i] + ', ';
  }
  console.log(string2);

}




function draw() {}

function swap(x, y){
  var cache = arr[x];
  arr[x] = arr[y];
  arr[y] = cache;
}

function shuffleArr(){
  for(let i = 0; i < arr.length; i++){ //shuffles the array
    let r = parseInt(random(0, arr.length));
    swap(i, r);
  }
}


function selectionSort(){
  var cache;
  var small;

  for(let i = 0; i < arr.length - 1; i++){
    small = i;
    cache = arr[i];

    for(let j = i + 1; j != arr.length; j++){
      if(arr[j] < arr[small]){
        small = j;
      }
    }

    swap(small, i);
  }
  
}
