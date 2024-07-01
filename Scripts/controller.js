import { getPizzas } from "./api-client.js";
window.addEventListener('load',displayPizzas);
function displayPizzas() {
    document.querySelector('#message').innerText='Loading....';
    const promise=getPizzas();
    promise.then(function (response) {
        const p=response.json();
        p.then(function (obj) {
            document.querySelector('#message').innerText='';
            console.log('Data is',obj['Vegetarian']);
            printPizza(obj['Vegetarian']);
        }).catch(function (e) {
            console.log('Invalid JSON',e);
        })
    }).catch(function (err) {
        document.querySelector('#message').innerText='Problem in Server Call, No Pizza Fetch';
    })
}
function printPizza(pizzas) {
    let allHtml='';
    for (let pizza of pizzas) {
        allHtml+=createPizzaCard(pizza);
    }
    document.querySelector('#pizzas').innerHTML = allHtml;
}
function createPizzaCard(singlePizza) {
    const html= `<div>
    <img src="${singlePizza.assets.menu[0].url}" />
    <p>${singlePizza.name}</p>
    <p>${singlePizza.price}</p>
    <button>Add to Cart</button>
</div>`
return html;
}