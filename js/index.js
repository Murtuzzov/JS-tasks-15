//ЗАДАНИЕ No1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта,
//необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

//ЗАДАЧА No1 первого задания
// Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные

// const shoppingList = [
//   { name: "Milk", requiredAmount: 2, boughtOrNot: true },
//   { name: "Cookies", requiredAmount: 5, boughtOrNot: false },
//   { name: "Cheese", requiredAmount: 3, boughtOrNot: false },
//   { name: "Bread", requiredAmount: 4, boughtOrNot: true },
// ];

// const printList = (arr) => {
//   const purchased = arr.filter((element) => element.boughtOrNot);
//   const notPurchased = arr.filter((element) => !element.boughtOrNot);

//   const readyList = notPurchased.concat(purchased);

//   readyList.forEach((arr) => {
//     if (arr.boughtOrNot === true) {
//       console.log(`${arr.name}: Куплено`);
//     } else {
//       console.log(`${arr.name}: не куплено`);
//     }
//   });
// };

// printList(shoppingList);

//_________________________________________________________________________________________________________________________

//ЗАДАЧА No2 первого задания
// Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом,
//необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// const shoppingList = [
//   { name: "Milk", requiredAmount: 2, boughtOrNot: true },
//   { name: "Cookies", requiredAmount: 5, boughtOrNot: false },
//   { name: "Cheese", requiredAmount: 3, boughtOrNot: false },
//   { name: "Bread", requiredAmount: 4, boughtOrNot: true },
// ];

// const addPurchase = (list, productName, quantity) => {
//   const existingElement = list.find((element) => element.name === productName);
//   if (existingElement) {
//     existingElement.requiredAmount += quantity;
//   } else {
//     list.push({
//       name: productName,
//       requiredAmount: quantity,
//       boughtOrNot: false,
//     });
//   }

//   list.forEach((list) => {
//     console.log(`${list.name} ${list.requiredAmount}`);
//   });
// };

// addPurchase(shoppingList, "Milk", 1);
// addPurchase(shoppingList, "Watermelon", 3);

// console.log(shoppingList);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//ЗАДАНИЕ No2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.

// ЗАДАЧА No1 из второго задания
// Распечатка чека на экран

// const receipt = [
//   { name: "Milk", quantity: 5, price: 2.99 },
//   { name: "Tomato", quantity: 10, price: 1.55 },
//   { name: "Juice", quantity: 1, price: 2.89 },
//   { name: "Meat", quantity: 3, price: 16 },
// ];

// function printReceipt(obj) {
//   receipt.forEach((obj) => {
//     console.log(
//       `${obj.name}: ${obj.quantity} | ${obj.price.toFixed(2)} | Сумма: ${(
//         obj.quantity * obj.price
//       ).toFixed(2)}`
//     );
//   });
// }

// printReceipt(receipt);

//___________________________________________________________________________________________________________________

//ЗАДАЧА No2 из второго задания
// Подсчет общей суммы покупки.

// const receipt = [
//   { name: "Milk", quantity: 5, price: 2.99 },
//   { name: "Tomato", quantity: 10, price: 1.55 },
//   { name: "Juice", quantity: 1, price: 2.89 },
//   { name: "Meat", quantity: 3, price: 16 },
// ];

// function calculateTotal(receipt) {
//   const total = receipt.reduce((sum, obj) => sum + obj.quantity * obj.price, 0);
//   return total.toFixed(2);
// }

// const totalAmount = calculateTotal(receipt);
// console.log(`Общая сумма: ${totalAmount}`);
