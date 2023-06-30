

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', (event) => {
    const value = event.currentTarget.value.length
    if (value === 6) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add('valid')
        return
    }
        inputEl.classList.add('invalid')
})