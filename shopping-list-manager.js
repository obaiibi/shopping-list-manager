// SHOPPING LIST MANAGER.

// Create an array with at least 5 shopping items.
let shoppingList = ["Bread", "Milk", "Eggs", "Sugar", "Rice"];

// Task 1: Display the Shopping List.

/*
Function: displayItems()

Purpose:
Displays every item in the shopping list.

How it works:
1. Prints a heading.
2. Uses the forEach() array method.
3. Displays every item together with its position.
*/

function displayItems() {
  console.log("Shopping List:");

  shoppingList.forEach(function (item, index) {
    console.log(index + 1 + ". " + item);
  });

  console.log("---------------------------");
}

// Task 2: Add a New Item.

/*
Function: addItem(item)

Purpose:
Adds a new item into the shopping list.

How it works:
1. Receives an item as a parameter.
2. Uses push() to add it.
3. Displays confirmation.
4. Displays the updated shopping list.
*/

function addItem(item) {
  shoppingList.push(item);

  console.log(item + " has been added.");
  displayItems();
}

// Task 3: Remove an Item.

/*
Function: removeItem(item)

Purpose:
Removes an item from the shopping list.

How it works:
1. Finds the item's position using indexOf().
2. If found:
      Uses splice() to remove it.
3. If not found:
      Displays "Item not found."
4. Displays the updated list.
*/

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

/*
Function: searchItem(item)

Purpose:
Checks whether an item exists.

How it works:
1. Uses includes().
2. If found:
      Displays that it exists.
3. Otherwise:
      Displays that it does not exist.
*/

function searchItem(item) {
  if (shoppingList.includes(item)) {
    console.log(item + " exists in the shopping list.");
  } else {
    console.log(item + " does not exist in the shopping list.");
  }

  console.log("---------------------------");
}

// Task 5: Count the Items.

/*
Function: countItems()

Purpose:
Displays the total number of shopping items.

How it works:
Uses the length property of the array.
*/

function countItems() {
  console.log("Total items:", shoppingList.length);
  console.log("---------------------------");
}

// Task 6: Create a Priority List.

/*
Function: createPriorityList()

Purpose:
Creates another array containing only
the first three shopping items.

How it works:
Uses slice() which copies items
without changing the original array.
*/

function createPriorityList() {
  let priorityList = shoppingList.slice(0, 3);

  console.log("Priority List:");
  priorityList.forEach(function (item) {
    console.log(item);
  });

  console.log("---------------------------");
}

// Task 7: Demonstrate Your Program.

// Display original list
console.log("INITIAL SHOPPING LIST");
displayItems();

// Add an item
console.log("ADDING ITEM");
addItem("Butter");

// Remove existing item
console.log("REMOVING ITEM");
removeItem("Milk");

// Search existing item
console.log("SEARCHING FOR AN ITEM");
searchItem("Rice");

// Search non-existing item
console.log("SEARCHING FOR AN ITEM THAT DOES NOT EXIST");
searchItem("Soap");

// Count items
console.log("COUNTING ITEMS");
countItems();

// Display priority list
console.log("PRIORITY LIST");
createPriorityList();
