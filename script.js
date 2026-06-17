const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapPrice = document.querySelector(".map-prices");
const sumAll = document.querySelector(".sumAll");
const filterVegan = document.querySelector(".filterVegan");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return newValue
}

function showAll(productArray) {
  let myLi = "";
  productArray.forEach((product) => {
    myLi += `
    <li>
    <img src=${product.src}>
    <p>${product.name}</p>
    <p class="item-price">${formatCurrency(product.price)}</p>
    </li>
    `;
  });
  list.innerHTML = myLi;
}

function mapPriceItems() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrice);
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
    <li>
        <p>O valor total dos items é: ${formatCurrency(totalValue)}</p>
    </li>
    `;
  console.log(totalValue);
}

function filterVeganItems() {
  const filterJusVegan = menuOptions.filter((product) => product.vegan);

  showAll(filterJusVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapPrice.addEventListener("click", mapPriceItems);
sumAll.addEventListener("click", sumAllItems);
filterVegan.addEventListener("click", filterVeganItems);
