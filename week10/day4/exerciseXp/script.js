// exercise 1

// async function fetchStarShip(){
//     try{
//         const response = await fetch("https://www.swapi.tech/api/starships/9/")
//         const objectStarWars = await response.json()
//         console.log(objectStarWars.result)
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchStarShip()

// exdercise 2

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//output calling, result, resolved