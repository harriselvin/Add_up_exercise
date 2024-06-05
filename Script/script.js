const num = document.querySelector('[data-num]')
const count = document.querySelector('[data-add]')
const resetBtn = document.querySelector('button')

num.addEventListener('input', function() {
    let inputValues = num.value.split(',').map(Number)
    let total = inputValues.reduce((total, currentValue) => total + currentValue, 0)
    count.innerText = `${total}`
})

function reset() {
    num.value = ''
    count.innerText = ''
}

resetBtn.addEventListener('click', reset)