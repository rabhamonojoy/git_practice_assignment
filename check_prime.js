let num=15;
count=0;
for(let i=0;i<num;i++){
   for(j=0;j<i;j++){
  if(i%j==0){
    count++;
   }
}
}
if(count==2){
console.log("prime")
}else{
console.log("not")
}
}