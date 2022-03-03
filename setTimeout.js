function doSomething(){
    console.log('I am from Inside Function');
}
//setTimeout(doSomething, 2000);
console.log('I am the First One');
console.log('I am the second One');
setTimeout(function(){
    console.log('i am first function from inside');
}, 4200)
setTimeout( setOne = () => {
    console.log('i am Second function from inside');
}, 4100)
console.log('I am the third One');
console.log('I am the fourth One');
console.log('I am the Fifth and last One');
