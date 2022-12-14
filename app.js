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
const addItem = (i) => {
  return items.push(emojisArray[i])
} 

// generates random index
const randomIndex = () => Math.floor(Math.random() * emojisArray.length);

// adds items to the the beginning of the array
const addItemToBegin = (i) => items.unshift(emojisArray[i]);

// insert items to specific index // should be revised
const insertItem = ((index, i) => items.splice(index, 0, i));

// removes last item from the array
const popItem = () => items.pop();

// removes first item from the array
const removeFirstItem = () => items.shift();



randomIndex();

//addItemToBegin(randomIndex());
//addItem(randomIndex());

items.forEach(i => console.log(i))
//popItem();
//removeFirstItem();
//console.log(items)
//console.log(insertItem(0,0,2))

for (let i = 0; i <= 6; i++) {
  addItem(i);
}
console.log(removeFirstItem())
console.log(items)





