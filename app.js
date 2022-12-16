const output = document.querySelector("#output");
const pushBtn = document.querySelector("#push-item");
const popBtn = document.querySelector("#pop-item");

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

// pushs items to an array
const addItem = (e) => {
  e.preventDefault();
  let i = randomIndex();
  items.push(emojisArray[i]);
  output.innerHTML = `[ ${items.join(" ")}]`;
};

// generates random index
const randomIndex = () => Math.floor(Math.random() * emojisArray.length);

// adds items to the the beginning of the array
const addItemToBegin = (i) => items.unshift(emojisArray[i]);

// insert items to specific index // should be revised
// const insertItem = (arr,index,el) => arr.splice(index-1, 0, el);
// ar = [1,2,3,4,5]
// let x = ar.splice(0,3,)
// console.log(x)

// removes last item from the array
const popItem = (e) => {
  e.preventDefault();
  items.pop();
  output.innerHTML = `[ ${items.join(" ")}]`;

  if (items.length === 0) {
    output.innerHTML = "[ Array is empty.Add new items]";
  }
};

// removes first item from the array
const removeFirstItem = () => items.shift();

// delete all items
const clearArray = (arr) => (arr.length = 0);

//shuffle items in the array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

//const filterItem = (arr, val) => arr.filter(i => i != val);

// deletes one item from a given index
const deleteOneItem = (arr, i) => {
  arr.splice(i - 1, 1);
  return arr;
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
