let Foods = [
  {
    FoodName: "Pizza Salami",
    Price: 8.99,
    Amount: 1,
    Description: "40cm Pizza mit Mozarella, Tomatensauce und Salami",
  },
  {
    FoodName: "Pizza Thuna",
    Price: 11.99,
    Amount: 1,
    Description:
      "40cm Pizza mit Mozarella, Tomatensauce, Thunfisch, und Zwiebeln",
  },
  {
    FoodName: "Pizza Margarita",
    Price: 7.99,
    Amount: 1,
    Description: " 40cm Leere Pizza Ohen Belag Nur Sauce Bro villeicht Käse",
  },
  {
    FoodName: "CheeseBurger",
    Price: 9.89,
    Amount: 1,
    Description: "Übelst Saftiger CheeseBurger (ist Tomate drin)",
  },
  {
    FoodName: "SmashBurger",
    Price: 11.89,
    Amount: 1,
    Description: " Mit karamellisierten zwiebeln ",
  },
  {
    FoodName: "ChickenBurger",
    Price: 8.99,
    Amount: 1,
    Description: "(Geheim, aber schmeckt brutall)",
  },
  {
    FoodName: "VegiBurger",
    Price: 8.99,
    Amount: 1,
    Description: "Besser nicht Bestellen wir haben auch fleisch da",
  },
  {
    FoodName: "Spaghetti Bolognese",
    Price: 8.99,
    Amount: 1,
    Description: "Classic Italiano Spaghetti",
  },
  {
    FoodName: "Spaghetti Carbonara",
    Price: 8.99,
    Amount: 1,
    Description: "Mit Guancale und Piccorino (orginal)",
  },
  {
    FoodName: "BärlauchPesto Pasta",
    Price: 8.99,
    Amount: 1,
    Description: "Bärlauch wegen Sommer und so",
  },
  {
    FoodName: "Lauwarmer Schokoladenkuchen",
    Price: 5.99,
    Amount: 1,
    Description: "Mit warmer Schokosauce und Beerendeko",
  },
];

let Pizzas = [
  {
    FoodName: "Pizza Salami",
    Price: 10.89,
    Amount: 1,
    Description: "40cm Pizza mit Mozarella, Tomatensauce und Salami",
  },
  {
    FoodName: "Pizza Thuna",
    Price: 11.99,
    Amount: 1,
    Description:
      "40cm Pizza mit Mozarella, Tomatensauce, Thunfisch, und Zwiebeln",
  },
  {
    FoodName: "Pizza Margarita",
    Price: 7.99,
    Amount: 1,
    Description: " 40cm Leere Pizza Ohen Belag nur Tomatensauce",
  },
  {
    FoodName: "Pizza Hawai",
    Price: 10.79,
    Amount: 1,
    Description: "Pizza mit Annans und Schinken(ein verbrechen)",
  },
];

let Burger = [
  {
    FoodName: "CheeseBurger",
    Price: 9.89,
    Amount: 1,
    Description: "Übelst Saftiger CheeseBurger (ist Tomate drin)",
  },
  {
    FoodName: "SmashBurger",
    Price: 11.89,
    Amount: 1,
    Description: " Mit karamellisierten zwiebeln ",
  },
  {
    FoodName: "ChickenBurger",
    Price: 8.99,
    Amount: 1,
    Description: "(Geheim, aber schmeckt brutall)",
  },
  {
    FoodName: "VegiBurger",
    Price: 8.99,
    Amount: 1,
    Description: "Besser nicht Bestellen wir haben auch fleisch da",
  },
  {
    FoodName: "RoadHouse Burger",
    Price: 12.99,
    Amount: 1,
    Description: "Double Patty mit Smoked bacon und barbecue sauce",
  },
];

let Pasta = [
  {
    FoodName: "Spaghetti Bolognese",
    Price: 8.99,
    Amount: 1,
    Description: "Classic Italiano Spaghetti",
  },
  {
    FoodName: "Spaghetti Carbonara",
    Price: 8.99,
    Amount: 1,
    Description: "Mit Guancale und Piccorino (orginal)",
  },
  {
    FoodName: "BärlauchPesto Pasta",
    Price: 8.99,
    Amount: 1,
    Description: "Bärlauch wegen Sommer und so",
  },
  {
    FoodName: "Meeresfrüchte Pasta",
    Price: 12.99,
    Amount: 1,
    Description: "Mit Tagliatelle und Frischen Meeresfrüchten",
  },
];

let Dessert = [
  {
    FoodName: "Lauwarmer Schokoladenkuchen",
    Price: 5.99,
    Amount: 1,
    Description: "Mit warmer Schokosauce und Beerendeko",
  },
  {
    FoodName: "Duet vom Schokomouse ",
    Price: 5.99,
    Amount: 1,
    Description: "Mit Frucht spiegel und Beerendeko",
  },
  {
    FoodName: "Frucht Salad mit 2 Kugeln Sorbet ",
    Price: 5.99,
    Amount: 1,
    Description: "Auswahl: Zitronen seft",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  renderBasket();
});

let cardPrices = [];
let ShoppingBasket = [];

function renderFoodItems() {
  let leftContent = document.getElementById("LeftContent");
  for (let i = 0; i < Foods.length; i++) {
    const food = Foods[i];
    leftContent.innerHTML += `<div class="ItemCard"> 
    <div class="ItemCardFood">  ${food["FoodName"]}   </div> 
    <div class="PriceCardPrice" > ${food["Price"]}€ <div> <img onclick="AddToBasket(${i})" class="PlusImg" src="img/plusIcon.png" alt=""> </div> </div>
    <div class="ItemCardDescription"> ${food["Description"]}   </div>
    </div>`;
  }
}

function displayPizzas() {
  let foodCategory = document.getElementById("LeftContent");
  let htmlContent = "";
  for (let i = 0; i < Pizzas.length; i++) {
    const FoodItem = Pizzas[i];

    htmlContent += `<div class="ItemCard">
    <div class="ItemCardFood">  ${FoodItem["FoodName"]}   </div> 
    <div class="PriceCardPrice" > ${FoodItem["Price"]}€ <div> <img onclick="AddToBasketPizza(${i})" class="PlusImg" src="img/plusIcon.png" alt=""> </div> </div>
    <div class="ItemCardDescription"> ${FoodItem["Description"]}   </div>
    </div>`;
  }
  foodCategory.innerHTML = htmlContent;
}

function displayBurgers() {
  let foodCategory = document.getElementById("LeftContent");
  let htmlContent = "";
  for (let i = 0; i < Burger.length; i++) {
    const FoodItem = Burger[i];
    htmlContent += `<div class="ItemCard">
    <div class="ItemCardFood">${FoodItem["FoodName"]}</div> 
    <div class="PriceCardPrice">${FoodItem["Price"]}€<div><img onclick="AddToBasketBurger(${i})" class="PlusImg" src="img/plusIcon.png" alt=""></div></div>
    <div class="ItemCardDescription">${FoodItem["Description"]}</div>
    </div>`;
  }
  foodCategory.innerHTML = htmlContent;
}

function displayPastas() {
  let foodCategory = document.getElementById("LeftContent");
  let htmlContent = "";
  for (let i = 0; i < Pasta.length; i++) {
    const FoodItem = Pasta[i];

    htmlContent += `<div class="ItemCard">
    <div class="ItemCardFood">  ${FoodItem["FoodName"]}   </div> 
    <div class="PriceCardPrice" > ${FoodItem["Price"]}€ <div> <img onclick="AddToBasketPasta(${i})" class="PlusImg" src="img/plusIcon.png" alt=""> </div> </div>
    <div class="ItemCardDescription"> ${FoodItem["Description"]}   </div>
    </div>`;
  }
  foodCategory.innerHTML = htmlContent;
}

function displayDessert() {
  let foodCategory = document.getElementById("LeftContent");
  let htmlContent = "";
  for (let i = 0; i < Dessert.length; i++) {
    const FoodItem = Dessert[i];

    htmlContent += `<div class="ItemCard">
    <div class="ItemCardFood">  ${FoodItem["FoodName"]}   </div> 
    <div class="PriceCardPrice" > ${FoodItem["Price"]}€ <div> <img onclick="AddToBasketDessert(${i})" class="PlusImg" src="img/plusIcon.png" alt=""> </div> </div>
    <div class="ItemCardDescription"> ${FoodItem["Description"]}   </div>
    </div>`;
  }
  foodCategory.innerHTML = htmlContent;
}


function renderBasket() {
  let shoppingCard = document.getElementById("Warenkorb-Items");
  shoppingCard.innerHTML = "";
  for (let s = 0; s < ShoppingBasket.length; s++) {
    shoppingCard.innerHTML += `<div id="addedItems">
    <div class="cardItem" > ${ShoppingBasket[s].FoodName}
      <button onclick="deletItem(${s});" class="deletButton"> X </button>
    </div>
    <div> ${ShoppingBasket[s].Price.toFixed(2)}€ </div>
    <div class="amountsection"> ${ShoppingBasket[s].Amount}x
      <button onclick="changeAmountPlus(${s})" class="amountbutton"> + </button>
      <button onclick="changeAmountMinus(${s})" class="amountbutton" > - </button>
    </div>
    </div>`;
  }
}

function checkItemAmount(i) {
  let item = Foods[i];
  let found = false;

  for (let j = 0; j < ShoppingBasket.length; j++) {
    if (ShoppingBasket[j].FoodName === item.FoodName) {
      ShoppingBasket[j].Amount += 1;
      ShoppingBasket[j].Price += item.Price;
      found = true;
      break;
    }
  }

  if (!found) {
    ShoppingBasket.push({ ...item, Amount: 1 });
    cardPrices.push(item.Price);
  }
  saveLocalStorage();
  subTotal();
  subTotal2();
}

function AddToBasket(i) {
  checkItemAmount(i);
  renderBasket();
  checkCard();
  renderBasketmobile();
  saveLocalStorage();
}

function AddToBasketPizza(i) {
  checkItemAmount(i);
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function AddToBasketBurger(i) {
  checkItemAmount(i);
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function AddToBasketPasta(i) {
  checkItemAmount(i);
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function AddToBasketDessert(i) {
  checkItemAmount(i);
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function deletItem(i) {
  ShoppingBasket.splice(i, 1);
  cardPrices.splice(i, 1);
  subTotal();
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function changeAmountPlus(i) {
  ShoppingBasket[i].Price += cardPrices[i];
  ShoppingBasket[i].Amount += 1;
  subTotal();
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function changeAmountMinus(i) {
  if (ShoppingBasket[i].Amount > 1) {
    ShoppingBasket[i].Amount--;
    ShoppingBasket[i].Price -= cardPrices[i];
  } else {
    deletItem(i);
  }
  subTotal();
  renderBasket();
  renderBasketmobile();
  saveLocalStorage();
}

function subTotal() {
  let price = document.getElementById("ZwischenSumme");
  let endPrice = document.getElementById("Gesamtsumme");
  let sum = 0;
  let deliverie = 1.99;
  for (let i = 0; i < ShoppingBasket.length; i++) {
    sum += ShoppingBasket[i].Price;
  }
  price.innerHTML = `ZwischenSumme ${sum.toFixed(2)}€`;
  let Endsumme = sum + deliverie;
  endPrice.innerHTML = `Gesamtsumme ${Endsumme.toFixed(2)}€`;
  checkCard();
}

function checkCard() {
  if (ShoppingBasket.length === 0) {
    document.getElementById("Gesamtsumme").innerHTML = `Gesamtsumme: 0€`;
    document.getElementById("ZwischenSumme").innerHTML = `ZwischenSumme: 0€`;
  }
}

function checkCardMobile() {
  if (ShoppingBasket.length === 0) {
    document.getElementById("Gesamtsumme1").innerHTML = `Gesamtsumme: 0€`;
    document.getElementById("ZwischenSumme1").innerHTML = `ZwischenSumme: 0€`;
  }
}

function pay() {
  let price = document.getElementById("ZwischenSumme");
  let endPrice = document.getElementById("Gesamtsumme");
  let clear = document.getElementById("Warenkorb-Items");
  if (ShoppingBasket.length === 0) {
    alert("Warenkorb ist leer");
  } else {
    alert("Ihre Bestellung wird in kürze bearbeitet");
  }
  clear.innerHTML = "";
  endPrice.innerHTML = "Gesamtsumme:";
  price.innerHTML = "Zwischensumme:";
  cardPrices = [];
  ShoppingBasket = [];
  saveLocalStorage();
}

function saveLocalStorage() {
  let shoppingcard = JSON.stringify(ShoppingBasket);
  let Prices = JSON.stringify(cardPrices);
  localStorage.setItem("ShoppingBasket", shoppingcard);
  localStorage.setItem("cardPrices", Prices);
}

function loadLocalStorage() {
  let shoppingcard = localStorage.getItem("ShoppingBasket");
  let Prices = localStorage.getItem("cardPrices");
  if (shoppingcard && Prices) {
    ShoppingBasket = JSON.parse(shoppingcard);
    cardPrices = JSON.parse(Prices);
  }
}

function subTotal2() {
  let price = document.getElementById("ZwischenSumme1");
  let endPrice = document.getElementById("Gesamtsumme1");
  let sum = 0;
  let deliverie = 1.99;
  for (let i = 0; i < cardPrices.length; i++) {
    sum += cardPrices[i];
  }
  price.innerHTML = `ZwischenSumme ${sum.toFixed(2)}€`;
  Endsumme = sum + deliverie;
  endPrice.innerHTML = `Gesamtsumme ${Endsumme.toFixed(2)}€`;
  checkCardMobile();
}

function showMobile() {
  document.getElementById("hide").classList.remove("hide");
  document.getElementById("hide").classList.add("show");
}

function renderBasketmobile(i) {
  let shoppingCard = document.getElementById("BasketMobile");
  shoppingCard.innerHTML = "";
  for (let s = 0; s < ShoppingBasket.length; s++) {
    shoppingCard.innerHTML += `<div id=addedItems>
    <div class="cardItem" > ${
      ShoppingBasket[s].FoodName
    } <button onclick="deletItem(${i});" class="deletButton"> X </button> </div>
    <div> ${ShoppingBasket[s].Price.toFixed(2)}€ </div>
    <div class="amountsection"> ${
      ShoppingBasket[s].Amount
    }x  <button onclick="changeAmountPlus(${s})" class="amountbutton"> + </button>   <button onclick="changeAmountMinus(${s})" class="amountbutton" > - </button> </div>
    </div>`;
  }
}

function MobileBasketPay() {
  let price = document.getElementById("ZwischenSumme1");
  let endPrice = document.getElementById("Gesamtsumme1");
  let clear = document.getElementById("BasketMobile");
  if (ShoppingBasket.length === 0) {
    alert("Warenkorb ist leer");
  } else {
    alert("Ihre Bestellung wird in kürze bearbeitet");
  }
  clear.innerHTML = "";
  endPrice.innerHTML = "Gesamtsumme:";
  price.innerHTML = "Zwischensumme:";
  cardPrices = [];
  ShoppingBasket = [];
}
