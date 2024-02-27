var cartItems = [
  {
    image: "chicken biryani.jpg",
    quantity: 2,
    price: 10.99,
    productName: "Chicken Biryani",
  },
  {
    image: "double ka meeta.jpg",
    quantity: 1,
    price: 8.59,
    productName: "Double Ka Meeta",
  },
  {
    image: "mutton biryani.jpg",
    quantity: 1,
    price: 13.99,
    productName: "Mutton Biryani",
  },
  {
    image: "fries.jpg",
    quantity: 2,
    price: 5.89,
    productName: "French Fries",
  },
  {
    image: "pizza.jpg",
    quantity: 3,
    price: 9.09,
    productName: "Pizza",
  },
  {
    image: "noodles.jpg",
    quantity: 2,
    price: 7.89,
    productName: "Noodles",
  },
  {
    image: "red pasta.jpg",
    quantity: 1,
    price: 9.09,
    productName: "Red Sauce Pasta",
  },
];

function renderCartItems() {
  var cartElement = document.getElementById("cartItems");
  var index = 0;

  function displayCartItem() {
    if (index < cartItems.length) {
      var cartItem = cartItems[index];
      var cartItemHTML = `
      <table style="margin-left:10px">
      <tr>
        <td style="width:350px;"><img src="${cartItem.image}" width="160px" height="160px"></td>
        <td style="font-size:20px; width:350px;">${cartItem.productName}</td>
        <td style="font-size:20px; width:250px;">${cartItem.quantity}</td>
        <td style="font-size:20px;">${cartItem.price}$</td>
      </tr>
      <hr>
      </table>
      `;
      cartElement.innerHTML += cartItemHTML;
      index++;
    }
    if (index < cartItems.length) {
      setTimeout(displayCartItem, 1500);
    }
  }
  displayCartItem();
}
renderCartItems();

// var contentElement = document.getElementById("content");
// var dataList = [];
// function displayData(index) {
//   if (index < dataList.length) {
//     contentElement.textContent += dataList[index];
//     index++;
//   }
//   setTimeout(function () {
//     displayData(index);
//   }, 1000);
// }
// function addData(newData) {
//   dataList.push(newData);
// }
// addData("First data");
// addData("Second data");
// addData("Third data");
// addData("Fourth data");

// displayData(0);
