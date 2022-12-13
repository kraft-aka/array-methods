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

let arr = [1,2,3]
// pushs items to an array
const addItem = (i) => {
  return items.push(emojisArray[i])
} 

// generates random index
const randomIndex = () => Math.floor(Math.random() * emojisArray.length);

// adds items to the the beginning of the array
const addItemToBegin = (i) => items.unshift(emojisArray[i]);

// insert items to specific index
const insertItem = ((arr, index) => arr.splice(index, 0, emojisArray[randomIndex()]));


randomIndex();

addItemToBegin(randomIndex());
addItem(randomIndex());

//items.forEach(i => console.log(i))
console.log(insertItem(arr,0))



