//sorting algorithm visualized

let arr = [];
let bWidth; //width of boxes
let bSpacing;
let nums = 50;  //amt of numbers in array



function setup() {
  createCanvas(400, 400);
  
  
  bSpacing = (width / nums) / 4;
  bWidth = bSpacing * 2;

  for(let i = 1; i <= nums; i++){
    arr[i - 1] = i;
  }

  shuf = createButton('shuffle');
  shuf.position(width / 2, height - 30);
  shuf.mousePressed(shuffleArr);

  

  sortbutt = createButton('sort');
  sortbutt.position(width / 2 - 50, height - 30);
  sortbutt.mousePressed(selectionSort)

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

function draw() {
  clear();
  background(0);
  noStroke();


  let x = bSpacing;
  let growthfactor =  height / nums - 1.5;
  let c = color(255);

  for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    num *= growthfactor;

    //let c = color(num, num, num);
    fill(c);
    rect(x, (height - 50) - num, bWidth, num);
    
    x+= width / nums;
  }


}

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
  var small;

  for(let i = 0; i < arr.length - 1; i++){
    small = i;

    for(let j = i + 1; j != arr.length; j++){
      if(arr[j] < arr[small]){
        small = j;
      }
    }

    swap(small, i);
  }

  function mainLoop(){
    for(let i = 0; i < arr.length - 1; i++){
      small = i;

      secondaryLoop(i)

      swap(small, j)
    }
  }

  function secondaryLoop(i){
    for(let j = i + 1; j != arr.length; j++){
      if(arr[j] < arr[small]){
        small = j;
      }
    }
  }

  
}

