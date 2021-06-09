let text = prompt("Введіть речення:");
let arr = text.split(" ");
if(text === ""){
    arr.pop();
}
alert(`Кількість слів: ${arr.length}`);