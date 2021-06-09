let arr = new Array();
let inArr = false;

do{
    text = prompt("Введіть email:");
    if(text === null)
        break;
    for(let i = 0; i < arr.length; i++){
        if(text == arr[i])
            inArr = true;
    }
    if(inArr)
        alert("Така електронна адреса вже зареєстрована!")
    else
        arr.push(text);
    inArr = false;
}while(text != "");

text = arr.join(", ");
alert(`${text}`);