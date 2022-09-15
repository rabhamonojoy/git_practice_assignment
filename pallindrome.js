let str="madam"
bag="";
rev=""
for(i=0;i<str.length;i++){
bag+=str[i];
}
for(j=str.length;j>=0;j--){
rev+=str[j];
}
if(bag==rev){
console.log("Yes")
}else{
console.log("No")
}