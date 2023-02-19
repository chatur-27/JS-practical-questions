//console
var arr = [1,2,3,4];


for (i in arr) {
    console.log(arr[i]);
}

console.log();

arr.forEach(function(number) {
    console.log(number);
});


//map
const numbers = [1,2,3,4];
const square = numbers.map(func)

function func(num) {
  return num *num;
}

console.log(square);
 



//filter

const country = ["pakistan","afghanistan","england","esilon","india"];
const result = country.filter(func);

function func(str) {
  return str[0] == 'e';
}

console.log(result);

//return string

const list = [1,'a',"abc",0.73];
const ans = list.filter(getStringList);

function getStringList(list) {
    return typeof (list) == 'string';
}

console.log(ans);
 

//reduce

const country2 = ["pakistan","afghanistan","england","esilon","india"];
const result2 = country2.reduce(func);

function func(total,str) {
  return total +", " +str;
}

console.log(result2+ " are the north european countries");



//count of letter

const country1 = ["pakistan","afghanistan","england","esilon","india"];
const map = new Map();

country1.forEach(
    function(i){
    if(map.has(i[0])){
        map.set(i[0],map.get(i[0])+1);
    }
    else {
        map.set(i[0],1);
    }
})
console.log(map);

let letter = '';
let count = -1;
map.forEach(function(value,key) {
	if(value > count) 
    {
        count = value;
        letter = key;
    }
})

console.log("most repeated : "+letter +" = "+ count);
 


//loop


const set = new Set();
for (let index = 1; index <= 10; index++) {
    set.add(index);
}
console.log(set);

//Remove element

set.delete(5);
console.log(set);

//Clear set


set.clear();
console.log(set);
 


//Create set

const sets = new Set();
const array = ['Finland','Finland','Australia','Sweden','Denmark','India']
var count1 = 0;
arr.forEach(element => {
  set.add(element);
  count1++;
});
console.log(sets)


//Create map

const maps = new Map();
const array1 = ['Finland','Finland','Australia','Sweden','Denmark','India'];
array.filter((str)=>{
  maps.set(str,str.length);
});
console.log(maps);


//A union B

      var a = [1,2,2,3,4,5,6,7,8]
      var b = [7,8,9,10,11,12,13,14,15,16,17,18]
      var n = a.length;
      var m = b.length;
      var min = (n < m) ? n : m;
 
        var set1 = new Set();
 
        for (i = 0; i < min; i++) {
            set1.add(a[i]);
            set1.add(b[i]);
        }
 
        if (n > m) {
            for (i = m; i < n; i++) {
                set1.add(a[i]);
            }
        } else if (n < m) {
            for (i = n; i < m; i++) {
                set1.add(b[i]);
            }
        }
         set1.forEach (function(value) {
          console.log(value+" ");
});

//A intersection B

    const set1 = new Set(a);
    const set2 = new Set(b);

    let intersection = [];

    for (let i of set2) {
    
        if (set1.has(i)) {
            intersection.push(i);
        }
    }
    console.log(intersection);
           

    const countr = [
      {'French':45},
      {'Arabic':25},
      {'Spanish':24},
      {'English':91},
      {'Russian':9},
      {'Portuguese':9},
      {'Dutch':8},
      {'German':7},
      {'Chinese':5},
      {'Swahili':4},
      {'Serbian':4}
    ]
 