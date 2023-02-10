// Model



/* Prøve å lage 'objects' inne i shopping items for å på quantity til å gå opp riktig når man også har linetrhough på teksten
om man i tidligere løsning sletter et item blir quantity overskrevet igjen */

let shoppingItems = [{ "item": "Eggs", "quantity": 1}, {"item": "Milk", "quantity": 1}];
let inputTxt = '';
let deletedItem = '';

// View

updateCart();
function updateCart() {
  inputTxt = '';
  html = /*HTML*/`
    <h1>Shopping Cart:</h1>
    <div>
      <ul>
        ${viewShoppingItems()}
      </ul>
    </div>
    <br/>
    <input type="text" onchange="inputTxt = this.value"  autocomplete="off" />
    <button onclick="addToCart()">Add to cart</button>
    `;
  document.getElementById('app').innerHTML = html;
}

function viewShoppingItems() {
  // If there are no items, return "You have no items in your shopping cart."
  if (shoppingItems.length === 0) {
    return "You have no items in your shopping cart.";
  }
  // Return every item in the array ShoppingItems inside a <li> tag
  let returnItems = '';
  for (i = 0; i < shoppingItems.length; i++) {
    returnItems += `<li class='listItem'><h2>
    ${shoppingItems[i].quantity === 1 ? '' : shoppingItems[i].quantity} ${shoppingItems[i].item[0].toUpperCase() +
      shoppingItems[i].item.slice(1, shoppingItems[i].item.length)}</h2>
      
    <button class="listButtons" onclick="(removeItem(${i}))">❌</button>
    <button class="listButtons" onclick="(checkMarkButton(${i}))">✅</button>
    <button class="listButtons" onclick="editButton(${i})">📝</button>
    <button class="listButtons" onclick="changeQuantity(${i}, '+')">➕</button>
    <button class="listButtons" onclick="changeQuantity(${i})">➖</button>
    </li>
    `;
  }
  return returnItems;
}

// Controller

function removeItem(liIndex) {
  deletedItem = shoppingItems.splice(shoppingItems[liIndex], 1)  /* [liIndex].splice(liIndex, 1) */;
  updateCart();
}

// The first if condition asks if the item already got the <s> tag, and if it does it will splice the item's text and put that as the new value
// If the first one returns false then it will add the <s> tag. 
function checkMarkButton(liIndex) {
  if (shoppingItems[liIndex].item[0] === '<') {
    shoppingItems[liIndex].item = shoppingItems[liIndex].item.slice(3, shoppingItems[liIndex].item.length - 4); /* The '3' is where the text start if the item got the <s> tag */
  } else {
    shoppingItems[liIndex].item = `<s>${shoppingItems[liIndex].item}</s>`;
    
  }
  updateCart();
}

// User enter a text they want the list item to change to
function editButton(liIndex) {
  let editTxt = prompt(shoppingItems[liIndex].item, shoppingItems[liIndex].item);
  editTxt ? (shoppingItems[liIndex].item = editTxt, updateCart()) : '';
}

function changeQuantity(liIndex, operator) {
  shoppingItems[liIndex].quantity === 1 && !operator ? '' : 
  operator ? shoppingItems[liIndex].quantity++ : shoppingItems[liIndex].quantity--
  updateCart();
}

// Function that adds the input text at the end of the shoppingcart array
function addToCart() {
  inputTxt = `${inputTxt[0].toUpperCase()}${inputTxt.slice(1, inputTxt.length)}` 
  shoppingItems.push({"item": inputTxt,"quantity": 1});
  updateCart();
}