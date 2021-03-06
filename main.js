
// <!-- Question 1   Testing Max Numbers within the Scope-->
    const TestMax = (expected , found) => {

        if(expected === found) {
            return  "  TEST SUCCEEDED";
        }
        return  "  TEST FAILED.  Expected " + expected + " found " + found;
    }

    const max =  (a,b) => {

        return a>b?a:b;

    }
   

console.log("Expected output of max(10,5) is 10  "+TestMax(10,function () {return max(10,5)}()));

document.writeln( `<h6 class='text-center'>  Q1 : Expected output of max(10,5) is 10  `+TestMax(10,function () {return max(10,5)}())  + "</h6>");


console.assert(max(10,5)==10,"Number is Invalid [Messege From Assertion] ")

//   Question 1 end  Test max


//   Question 2 start of Three max
const  ThreeMax= (a,b,c) => {

    return max(a,max(b,c));
}
document.writeln( `<h6 class="text-center">  Q2 : Expected output of ThreeMax(10,5,4) is 10  `+TestMax(10,function () {return ThreeMax(10,5,4)}())  + "</h6>");

console.log("Expected output of ThreeMax(10,5,4) is 10  "+TestMax(10,function () {return ThreeMax(10,5,4)}()));

console.assert(ThreeMax(10,5,4)==10,"Number is not equal [Messege From Assertion] ")
//end Question 2 Three Max End




//start Question 3 Vowel Work OUt

const isVowel = (character) =>{
    let vowels = ['a','e','i','o','u','y'];
    return vowels.includes(character)===true?true:false;
}

const  TestVowel = (expected , found) =>{

    if(expected) return "TEST SUCCEEDED";
    else return "TEST FAILED.  Expected " + expected + " found " + found;
}

console.log("Expected output of TestVowel(a) is  true "+TestVowel(true,isVowel('a')));

document.writeln( `<h6 class='text-center'>  Q3 : Expected output of isVowel('a') is true  `+TestVowel(true,function(){ return isVowel('a') }())  + "</h6>");


console.assert(isVowel('a')==true,"Character is not valid [Messege From Assertion] ")
//End Question 3 Vowel WorkOut

//Start Question 4



const sum = (array) =>{

    let sum =0;

    array.forEach(item =>{
        sum+=item;
    })

    return sum;

}

const multiply = (array) =>{

    let result =1;

    array.forEach(item =>{
        result*=item;
    })

    return result;

}

const TestSum = (expected ,found)=> {
    if(expected == found) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;
}

const TestMultiply = (expected ,found)=> {

    if(expected == found) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;

}

document.writeln( `<h6 class="text-center">  Q4.a : Expected output of TestSum([1,2,3,4]) is  10  `+TestVowel(true,function(){ return isVowel('a') }())  + "</h6>");
document.writeln( `<h6 class="text-center">  Q4.b : Expected output of Multiply([1,2,3,4]) is  24  `+TestMultiply(24,function(){return multiply([1,2,3,4])}()) + "</h6>");

console.log("Expected output of Sum([1,2,3,4]) is  10 "+TestSum(10,sum([1,2,3,4])));
console.log("Expected output of Multiply([1,2,3,4]) is  24 "+TestMultiply(24,multiply([1,2,3,4])));

console.assert(sum([1,2,3,4])==10,"Number is not equal [Messege From Assertion] ")
console.assert(multiply([1,2,3,4])==24 ,"Number is not equal [Messege From Assertion] ")
//end of Question 4









//reverse string



const reverseString = (string) => {
var array=string.slice();
let element="";
for (let index = array.length-1; index >= 0; index--) {
    element += array[index];
}
return element;
}

const testReverse = (expected ,found) =>{

    if(expected == found) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;

}
document.writeln( `<h6 class="text-center">  Q5 : Expected output of Reverse(WAP) is  PAW  `+testReverse("PAW",function () {return reverseString("WAP")}()) + "</h6>");

console.log("Expected output of Reverse(WAP) is  PAW "+testReverse("PAW",reverseString("WAP")));

console.assert(reverseString("WAP")=="PAW","Word is not equal [Messege From Assertion] ")

//end of reverse 


//  findLongestWord()

const findLongestWord = (array) =>{

    let max=array[0].length,num;
    array.forEach(item =>{
         num =item.length;
          if(max < num)
            max = num;
    });

    return max;
}

const TestLong = (expected,found) =>{

    if(expected == found) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;

}

document.writeln( `<h6 class="text-center">  Q6 : Expected output of findLongestWord(["dsdad","tretess","fd","dsd"]) is  7  `+TestLong(7,findLongestWord(["dsdad","tretess","fd","dsd"])) + "</h6>");

console.log(`Expected output of findLongestWord(["dsdad","tretess","fd","dsd"]) is  7 `+TestLong(7,findLongestWord(["dsdad","tretess","fd","dsd"])));

console.assert(findLongestWord(["dsdad","tretess","fd","dsd"])==7,"Number is Invalid [Messege From Assertion] ");

// end of findLongestWord()

//start of filterLongWords

const filterLongWords =(array ,i)=>{
       
    let temp = [];
    array.forEach( function(item) {

        if(item.length>i)
        temp.push(item)
    })

    return temp;

}



const testFilterLong =(expected , found) =>{

    if(JSON.stringify(expected) == JSON.stringify(found)) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;
} 

document.writeln( `<h6 class="text-center">  Q7 : Expected output of filterLongWords(["dsdad","tretess","fd","dsd"] ,3 ) is  ["dsdad","tretess"]  `+testFilterLong(["dsdad","tretess"],filterLongWords(["dsdad","tretess","fd","dsd"] ,3)) + "</h6>");

console.log(`Expected output of filterLongWords(["dsdad","tretess","fd","dsd"] ,3) is  ["dsdad","tretess"] `+testFilterLong(["dsdad","tretess"],filterLongWords(["dsdad","tretess","fd","dsd"] ,3)));

console.assert(JSON.stringify(filterLongWords(["dsdad","tretess","fd","dsd"] ,3))==JSON.stringify(["dsdad","tretess"]),"array is not equal [Messege From Assertion] ");

// console.assert(filterLongWords(["dsdad","tretess","fd","dsd"],3)==["dsdad","tretess"],"Verification Error ");
//end of filterLongWords



//Map/reduce /fIlter Question

const a = [1,3,5,3,3]; 

const Maptester = (expected , found) =>{

    if(JSON.stringify(expected) === JSON.stringify(found)) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;

}


const Filtertester = (expected , found) =>{

    if(JSON.stringify(expected) === JSON.stringify(found)) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;

}

const b = a.map(function(elem, i, array) {
  return (elem*10) + 3;
})

console.log(`Expected output of Map of an array [1,3,5,3,3] is   `+Maptester([1,3,5,3,3],[1,3,5,3,3]));

document.writeln(`<h6 class="text-center"> Map result`+b+`</h6> `);
const c = a.filter(function(elem, i, array){
  return elem === 3;});

console.log(`Expected output of Filter of an array [1,3,5,3,3] is  [3,3,3] `+Filtertester(c,[3,3,3]));
document.writeln(`<h6 class="text-center"> Filter`+c+`</h6>`);


const Reducetester = (expected , found) =>{

    if(expected=== found) return "TEST SUCCEEDED"
    else return "TEST FAILED.  Expected " + expected + " found " + found;

}


const d = a.reduce(function(prevValue, elem, i, array){
    prevValue *=elem;
  return prevValue ;
});
document.writeln(`<h6 class="text-center"> Reduce `+d+`</h6>`);
console.log(`Expected output of Reduce of an array [1,3,5,3,3] is 135  `+Reducetester(d,135));
console.log()


//end m/r/f
