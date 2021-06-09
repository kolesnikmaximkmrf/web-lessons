let arr = new Array();
let text;
let sum = 0;
let par = 0;
let nopar = 0;
do{
    text = prompt("Введіть число:");
    if(text === null){
        arr.push(text);
        break;
    }
    arr.push(text);
}while(!isNaN(text) && text != "");
arr.pop();
for(let i = 0; i < arr.length; i++){
    sum += +arr[i];
    if(+arr[i] % 2 == 0)
        par++;
    else
        nopar++;
}
text = arr.join(", ");
alert(`${text}\nСума: ${sum}\nПарні: ${par}\nНепарні: ${nopar}`);