/*
this file make a API Call
*/
 export function getPizzas(){
    // ES6 const
    const URL = 'https://raw.githubusercontent.com/brainmentorspvtltd/pizza-api/main/pizza.json'
    //URL = ""; // Error
    const promise = fetch(URL); // Async
    return promise;
    // Promise Stages
    // 1. Pending
    // 2. FullFilled / Rejected
}
//export default getPizzas;

// export  function show(){}
// export  function disp(){}
