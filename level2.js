var arr = [1, [2, [3, [4, 5]]], 6];
      var arr1=[];
      var m=0;
      document.write(arr.length)
function recur(arr){
  var length=arr.length;
  var chongfu;
  for(var i=0;i<length;i++){
    for(var j=i+1;j<length;j++){
      if(arr[i]==arr[j]){
        arr1[m]=arr[i];
        m++;
        arr1[m]=arr[j];
        m++;
      }
    }
  }
  document.write("[")
for(var n=0;n<m;n++){
  document.write(arr1[n])
}
document.write("]")
}
recur(arr); 
