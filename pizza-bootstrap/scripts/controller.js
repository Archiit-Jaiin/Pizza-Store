/*
    Print all the Pizza's on Screen
    Controller Act as a Middleman
    I get the pizzas from the API Client JS
    and then render it on HTML.
    Controller Role - It do DOM Handling
    Document Object Model
*/
//import getPizzas from './api-client.js';
// import { getPizzas } from "./api-client.js";
window.addEventListener("load", createPizzaCard);
// function displayPizzas() {
//   document.querySelector("#message").innerText = "Loading....";
//   const promise = getPizzas();
//   promise
//     .then(function (response) {
//       const p = response.json();
//       p.then(function (obj) {
//         document.querySelector("#message").innerText = "";
//         console.log("Data is ", obj["Vegetarian"]);
//         printPizza(obj["Vegetarian"]);
//       }).catch(function (e) {
//         console.log("Invalid JSON", e);
//       });
//     })
//     .catch(function (err) {
//       document.querySelector("#message").innerText = `Problem in Server
//          Call , No Pizza Fetch`;
//     });
// }
// function printPizza(pizzas){
//     let allHtml = '';
//     for(let pizza of pizzas){
//         allHtml+=createPizzaCard(pizza);
//         //console.log('pizza ', pizza);

//     }
//     document.querySelector('#pizzas').innerHTML = allHtml;
// }
function createPizzaCard() {
  const mainDiv = document.getElementById("pizzas");

  //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //   <a href="#" class="btn btn-primary">Go somewhere</a>
  // </div>

  const divTag = document.createElement("div");
  divTag.className = "card";
  divTag.style.width = "18rem";
  // <div class="card" style="width: 18rem;">
  const imgTag = document.createElement("img");
  imgTag.src = "";
  imgTag.className = "card-img-top";

  // <img src="..." class="card-img-top" alt="...">
  // <div class="card-body">
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  //   <h5 class="card-title">Card title</h5>
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = "Card title";
  //   <a href="#" class="btn btn-primary">Go somewhere</a>
  const aTag = document.createElement("a");
  aTag.href = "";
  aTag.className = "btn btn-primary";
  aTag.innerText = "go somewhere";

  // below 2 lines were missing in the class
  cardBody.appendChild(imgTag);
  cardBody.appendChild(h5);
  cardBody.appendChild(aTag);

  divTag.appendChild(cardBody);
  mainDiv.appendChild(divTag);

  //     const html = ` <div>
  //     <img src = "${singlePizza.assets.menu[0].url}"/>
  //     <p>${singlePizza.name}</p>
  //     <p>${singlePizza.price}</p>
  //     <button>Add to Cart</button>
  // </div>`;
  // return html;
}
