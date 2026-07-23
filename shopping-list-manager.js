// SHOPPING LIST MANAGER.

// Create an array with at least 5 shopping items.
let shoppingList = ["Bread", "Milk", "Eggs", "Sugar", "Rice"];

// Task 1: Display the Shopping List.

function displayItems() {
  console.log("Shopping List:");

  shoppingList.forEach(function (item, index) {
    console.log(index + 1 + ". " + item);
  });

  console.log("---------------------------");
}

// Task 2: Add a New Item.

function addItem(item) {
  shoppingList.push(item);

  console.log(item + " has been added.");
  displayItems();
}

// Task 3: Remove an Item.

function removeItem(item) {
  let index = shoppingList.indexOf(item);

  if (index !== -1) {
    shoppingList.splice(index, 1);
    console.log(item + " has been removed.");
  } else {
    console.log("Item not found.");
  }

  displayItems();
}

// Task 4: Search for an Item.

function searchItem(item) {
  if (shoppingList.includes(item)) {
    console.log(item + " exists in the shopping list.");
  } else {
    console.log(item + " does not exist in the shopping list.");
  }

  console.log("---------------------------");
}

// Task 5: Count the Items.

function countItems() {
  console.log("Total items:", shoppingList.length);
  console.log("---------------------------");
}

// Task 6: Create a Priority List.

function createPriorityList() {
  let priorityList = shoppingList.slice(0, 3);

  console.log("Priority List:");
  priorityList.forEach(function (item) {
    console.log(item);
  });

  console.log("---------------------------");
}

// Task 7: Demonstrate Your Program.

console.log("INITIAL SHOPPING LIST");
displayItems();

console.log("ADDING ITEM");
addItem("Butter");

console.log("REMOVING ITEM");
removeItem("Milk");

console.log("SEARCHING FOR AN ITEM");
searchItem("Rice");

console.log("SEARCHING FOR AN ITEM THAT DOES NOT EXIST");
searchItem("Soap");

console.log("COUNTING ITEMS");
countItems();

console.log("PRIORITY LIST");
createPriorityList();
