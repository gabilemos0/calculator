const currentValue = document.querySelector('#currentValue')
const answerScreen = document.querySelector('#answerScreen')
const buttons = document.querySelectorAll('button')
const backspace = document.querySelector('#backspace')
const clear = document.querySelector('#clear')
const result = document.querySelector('#result')
let realTimeScreenValue = ['']

clear.addEventListener('click', function () {
  realTimeScreenValue = ['']
  answerScreen.innerHTML = 0
})

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (
      btn.id !== 'backspace' &&
      btn.id !== 'result' &&
      btn.id !== 'clearBtn'
    ) {
      realTimeScreenValue.push(btn.value)
      currentValue.innerHTML = realTimeScreenValue.join('')
      if (btn.classList.contains('num_btn')) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
      }
    }
    if (btn.id === 'backspace') {
      realTimeScreenValue.pop()
      currentValue.innerHTML = realTimeScreenValue.join('')
      answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
    }

    if (btn.id === 'result') {
      currentValue.innerHTML = eval(realTimeScreenValue.join(''))
      answerScreen.innerHTML = 0
    }
  })
})
