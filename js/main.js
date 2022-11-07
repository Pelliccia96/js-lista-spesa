const list = ["Pane", "Farina", "Acqua", "Latte", "Biscotti", "Pasta"];
console.log(list);
const listEl = document.getElementById("list");

let i = 0;

while (i < list.length) {
    console.log(list [i]);
    i++
}

listEl.innerHTML += list;
