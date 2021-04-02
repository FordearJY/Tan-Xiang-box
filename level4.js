//第一种递归调用深拷贝；
var data = {
  age: 18,
  name: "liuruchao",
  education: ["小学", "初中", "高中", "大学", undefined, null],
  likesFood: new Set(["fish", "banana"]),
  friends: [
        { name: "summer",  sex: "woman"},
        { name: "daWen",   sex: "woman"},
        { name: "yang",    sex: "man" }  ], 
  work: { 
          time: "2019", 
          project: { name: "test",obtain: ["css", "html", "js"]} 
        }, 
  play: function() {    document.write("玩滑板");  }
}
function deepCopy(p){
var c=c || {};
for(var key in p){
if(typeof p[key]==='object'){
  c[key]=(p[key].constructor===Array)? []:{};
}else{
  c[key]=p[key];
}
}
return c;
}
var obj1=deepCopy(data);
console.log(data);
////第二种递归迭代深拷贝调用
var data1 = {
  age: 18,
  name: "liuruchao",
  education: ["小学", "初中", "高中", "大学", undefined, null],
  likesFood: new Set(["fish", "banana"]),
  friends: [
        { name: "summer",  sex: "woman"},
        { name: "daWen",   sex: "woman"},
        { name: "yang",    sex: "man" }  ], 
  work: { 
          time: "2019", 
          project: { name: "test",obtain: ["css", "html", "js"]} 
        }, 
  play: function() {    document.write("玩滑板");  }
}
function isobject(o){
return (typeof o === 'object' || typeof o === 'function') && o !=null;
}
function deepclone1(obj){
var isArray=Array.isAraay(obj);
var cloneobj1=isArray ? []:{};
for(var key in obj){
var cloneobj1=isobject(obj[key])?deepclone1(obj[key]):obj[key];
}
return cloneobj1;
}
var obj2=deepclone1(data1);
console.log(obj2);
