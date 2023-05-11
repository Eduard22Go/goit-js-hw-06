let counterValue = 0;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

decrementBtnRef.addEventListener('click', handleDecrementBtnClick);
incrementBtnRef.addEventListener('click', handleIncrementBtnClick)

function handleDecrementBtnClick () {
    counterValue -= 1;
    // console.log(counterValue);
    valueRef.textContent = counterValue;
     // console.log(counterValue);
}
   
function handleIncrementBtnClick() {
    counterValue += 1;
    // console.log(counterValue);
    valueRef.textContent = counterValue;
     // console.log(counterValue);
}


