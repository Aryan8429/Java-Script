const name="aryan"
const repocount = 50
// console.log(name+repocount)
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
"aryan".charAt(1)
"aryan"[2]
//comparing string
const a="a";
const b="b";
if(a<b){
    console.log(`${a}is less than ${b}`);
}
else if(a>b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${a} and ${b} are equals.`);
}
function areEqualCaseInsenitive(str1,str2){
    return str1.toUpperCase()===str2.toUpperCase();
}
