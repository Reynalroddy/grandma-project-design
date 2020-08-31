const items = [
  {
    id: 1,
    category: "sweets",
    price: 5.99,
    img: "../img/sweets-1.jpeg",
    desc: `sweet item `,
  },

  {
    id: 2,
    category: "cakes",
    price: 16.2,
    img: "../img/cake-2.jpeg",
    desc: `cake item `,
  },

  {
    id: 3,
    category: "cupcakes",
    price: 14.34,
    img: "../img/cupcake-1.jpeg",
    desc: `cupcake item `,
  },

  {
    id: 4,
    category: "cakes",
    price: 15.0,
    img: "../img/cake-1.jpeg",
    desc: `cake item `,
  },

  {
    id: 5,
    category: "sweets",
    price: 10.99,
    img: "../img/sweets-2.jpeg",
    desc: `sweet item `,
  },

  {
    id: 6,
    category: "doughnuts",
    price: 18.99,
    img: "../img/doughnut-3.jpeg",
    desc: `doughnut item `,
  },

  {
    id: 7,
    category: "sweets",
    price: 12.99,
    img: "../img/sweets-3.jpeg",
    desc: `sweet item`,
  },

  {
    id: 8,
    category: "cupcakes",
    price: 9.99,
    img: "../img/cupcake-2.jpeg",
    desc: `cupcake item `,
  },

  {
    id: 9,

    category: "doughnuts",
    price: 11.99,
    img: "../img/doughnut-1.jpeg",
    desc: `doughnut item `,
  },

  {
    id: 10,
    category: "cupcakes",
    price: 5.99,
    img: "../img/cupcake-3.jpeg",
    desc: `cupcake item `,
  },

  {
    id: 11,
    category: "doughnuts",
    price: 16.99,
    img: "../img/doughnut-2.jpeg",
    desc: `doughnut item `,
  },

  {
    id: 12,
    category: "cakes",
    price: 17.66,
    img: "../img/cake-3.jpeg",
    desc: `cake item `,
  },
];

//declare variables

let itemsRow = document.querySelector(".items-row");
let defaultDisplay;
let input = document.querySelector("#input-form");
let cart = document.querySelector(".second-item");
window.addEventListener("DOMContentLoaded", function () {
  displayItems(items);
  displayBtn();
});
cart.addEventListener("click", showCart);

function showCart() {
  let market = document.querySelector(".cart");
  market.classList.toggle("show-cart");
}
function displayItems(menu) {
  defaultDisplay = menu.map(function (item) {
    return `     <div class="col-md-6 col-lg-4 py-2 single-item" data-id=${item.desc}>
              <div class="card mx-auto">
                <div class="img-cont">
                  <img
                    src=${item.img}
                    class="card-img-top item-img"
                    alt="#"
                  />
                  <span
                    ><i class="fas fa-shopping-cart item-icon p-2"></i
                  ></span>
                </div>

                <div class="card-body d-flex justify-content-between">
                  <h4 class="description">${item.desc}</h4>
                  <h6 class="pricing">$${item.price}</h6>
                </div>
              </div>
            </div>`;
  });

  defaultDisplay = defaultDisplay.join("");

  itemsRow.innerHTML = defaultDisplay;
}

input.addEventListener("keyup", filterItems);
//filter with input
function filterItems() {
  let filterText = input.value;
  let single = document.querySelectorAll(".single-item");
  console.log(filterText);
  single.forEach(function (item) {
    if (item.dataset.id.indexOf(filterText) === -1) {
      console.log(filterText);
      console.log(item);
      item.style.display = "none";
    } else {
      item.style.display = "";
    }
  });
}

//filter with buttons

function filterIt(e) {
  console.log(e.target.dataset.filt);
  let single = document.querySelectorAll(".single-item");
  let filtItVal = e.target.dataset.filt;
  console.log(filtItVal);

  let newArr = Array.from(single);
  console.log(newArr);
  let categories = items.filter(function (item) {
    // console.log(item.dataset.id);
    //console.log(filtItVal);
    if (item.category === filtItVal) {
      return item;
    }
  });
  if (filtItVal === "all") {
    displayItems(items);
  } else {
    displayItems(categories);
  }
  //console.log(categories);
}

//add btn dynamically

let btnRow = document.querySelector(".filter-buttons");

function displayBtn() {
  let btnCtegory = items.map(function (item) {
    return item.category;
  });

  console.log(btnCtegory);

  let btnReal = btnCtegory.reduce(
    function (total, item) {
      if (!total.includes(item)) {
        total.push(item);
      }
      return total;
    },
    ["all"]
  );

  console.log(btnReal);

  let btnz = btnReal.map(function (item) {
    return ` <button
                class="btn btn-outline-danger text-uppercase mr-2"
                data-filt=${item}
              >
                ${item}
              </button>`;
  });

  btnz = btnz.join("");

  btnRow.innerHTML = btnz;
  let btns = document.querySelectorAll(".btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", filterIt);
  });
}
