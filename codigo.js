var número  = [1,3,5,7,9,11,13,15];
var maximo = 0;

for(i=0,len=número .length;i<len;i++){
    if(maximo < número [i]){
        maximo = número [i];
    }
}
document.write(maximo);