const list = ["Pane", "Farina", "Acqua", "Latte", "Biscotti", "Pasta"];
console.log(list);
const listEl = document.getElementById("list");

const listItems = document.querySelector("ul");
const listItem = document.createElement("li");

let i = 0;

while (i < list.length) {
    console.log(list [i]);
    listItem.innerHTML += list;
    i++
}

listEl.innerHTML += list;
listItems.append(listItem);
