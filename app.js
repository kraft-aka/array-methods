const output = document.querySelector("#output");
const output2 = document.querySelector("#output-2");

const container = document.querySelector(".container");
const body = document.querySelector("body");

const pushBtn = document.querySelector("#push-item");
const popBtn = document.querySelector("#pop-item");
const shiftBtn = document.querySelector("#shift-item");
const unshiftBtn = document.querySelector("#unshift-item");
const clearAllBtn = document.querySelector("#delete-all-items");
const shuffleBtn = document.querySelector("#shuffle-array");
const insertBtn = document.querySelector("#insert-item");
const deleteItemBtn = document.querySelector("#delete-one-item");
const darkModeBtn = document.querySelector("#btn-dark-mode");

const insertIndex = document.querySelector("#num");
const deleteIndex = parseInt(document.querySelector("#num-delete").value);

const items = [];

const emojisArray = [
  "👌",
  "✋",
  "👍",
  "👎",
  "🖕",
  "👊",
  "🤘",
  "✊",
  "💪",
  "👉",
  "👈",
  "👏",
  "👐",
  "🙏",
  "✌",
  "👋",
  "♥",
  "🎉",
  "🎂",
  "🎁",
  "💰",
  "☕",
  "☂",
  "🎓",
  "☔",
  "🚗",
  "✈",
  "🔫",
  "✔",
  "🎸",
  "🎄",
  "😘",
  "😂",
  "😁",
  "😚",
];

// checks if the array is empty
if (items.length === 0) {
  output.innerHTML = "[ Array is empty. Add new items! ]";
}

// checks the length of the array
const checkLengthOfArray = (arr) => {
  arr.length ? alert("There are 10 items in the array") >= 10 : "";
};

// pushs items to an array
const addItem = (e) => {
  e.preventDefault();
  let i = randomIndex();
  items.push(emojisArray[i]);
  output.innerHTML = `[ ${items.join("")}]`;
};

// generates random index
const randomIndex = () => Math.floor(Math.random() * emojisArray.length);

// adds items to the the beginning of the array
const addItemToBegin = (e, i) => {
  e.preventDefault();
  i = randomIndex();
  items.unshift(emojisArray[i]);
  output.innerHTML = `[ ${items.join("")}]`;
};

// insert items to specific index // should be revised
// const insertItem = (arr,index,el) => arr.splice(index-1, 0, el);
// ar = [1,2,3,4,5]
// let x = ar.splice(0,3,)
// console.log(x)

// removes last item from the array
const popItem = (e) => {
  e.preventDefault();
  items.pop();
  output.innerHTML = `[ ${items.join("")}]`;
};

// removes first item from the array
const removeFirstItem = (e) => {
  e.preventDefault();
  items.shift();
  output.innerHTML = `[ ${items.join("")}]`;
};

// delete all items
const clearArray = (e) => {
  e.preventDefault();
  items.length = 0;
  output.innerHTML = `[ ${items}]`;
};

//shuffle items in the array
const shuffleArray = (e) => {
  e.preventDefault();
  items.sort(() => Math.random() - 0.5);
  output.innerHTML = `[ ${items.join("")}]`;
};

//const filterItem = (arr, val) => arr.filter(i => i != val);

// deletes one item from a given index
const deleteOneItem = (e) => {
  e.preventDefault();
  if (deleteIndex > -1) {
    items.splice(deleteIndex - 1, 1);
  }
  output.innerHTML = `[ ${items.join("")}]`;
};

//addItemToBegin(randomIndex());
//addItem(randomIndex());

//items.forEach(i => console.log(i))
//popItem();
//removeFirstItem();
//console.log(items)
//console.log(insertItem(0,0,2))

// for (let i = 0; i <= 6; i++) {
//   addItem(i);
// }
// console.log(items);
// document.write("\n");
// document.write(deleteOneItem(items, 1));
//console.log(removeFirstItem())
//console.log(items)
//clearArray(items)
//console.log(shuffleArray(items))

// event listeners
pushBtn.addEventListener("click", addItem);
popBtn.addEventListener("click", popItem);
shiftBtn.addEventListener("click", removeFirstItem);
unshiftBtn.addEventListener("click", addItemToBegin);
clearAllBtn.addEventListener("click", clearArray);
shuffleBtn.addEventListener("click", shuffleArray);
deleteItemBtn.addEventListener("click", deleteOneItem);
darkModeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.toggle("dark-mode");
  darkModeBtn.innerHTML = container.classList.contains("dark-mode")
    ? "light mode"
    : "dark mode";
  body.style.backgroundColor = container.classList.contains("dark-mode")
    ? "#A700AF"
    : "";
});
