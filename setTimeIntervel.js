console.log('first');

// setInterval( () => {
//     console.log(' i am second');
// }, 4000)

let seconds = 0;
let timeId = setInterval( () => {
    seconds++
    if(seconds > 15){
        clearInterval(timeId)
        console.log(seconds);
    }
},1000)

console.log('third');