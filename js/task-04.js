const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;  
    },
};

const refs = {
    decBtn: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector("#value"),
    incBtn: document.querySelector('[data-action="increment"]'),
}

refs.incBtn.addEventListener('click', onTargetBtnAddValueClick);
refs.decBtn.addEventListener("click", onTargetBtnDelValueClick);

function onTargetBtnAddValueClick(event) {
    counterValue.increment()
    refs.value.textContent = counterValue.value;
}

function onTargetBtnDelValueClick(event) {
    counterValue.decrement();
    refs.value.textContent = counterValue.value;
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------



// let counterValue = 0;

// const refs = {
//   decBtn: document.querySelector('[data-action="decrement"]'),
//   value: document.querySelector("#value"),
//   incBtn: document.querySelector('[data-action="increment"]'),
// };

// refs.incBtn.addEventListener("click", onTargetBtnAddValueClick);
// refs.decBtn.addEventListener("click", onTargetBtnDelValueClick);

// function onTargetBtnAddValueClick(event) {
//   counterValue += 1;
//   refs.value.textContent = counterValue;
// }

// function onTargetBtnDelValueClick(event) {
//   counterValue -= 1;
//   refs.value.textContent = counterValue;
// }