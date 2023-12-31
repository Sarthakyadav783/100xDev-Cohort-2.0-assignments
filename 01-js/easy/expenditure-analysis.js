/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through each transaction using a for loop
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const { category, price } = transaction;

    // If category already exists in the map, add the price to the total
    if (categoryMap[category]) {
      categoryMap[category].totalSpent += price;
    } else {
      // If category doesn't exist, create a new entry in the map
      categoryMap[category] = { category, totalSpent: price };
    }
  }
    console.log(categoryMap);
  // Convert the map values to an array of objects
  const result = Object.values(categoryMap);

  return result;
}

// Example usage:
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656176800000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656276800000,
    price: 15,
    category: 'Electronics',
    itemName: 'Headphones',
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;

