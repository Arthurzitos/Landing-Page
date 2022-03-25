const form = document.querySelector('form')

const nomeInput = document.querySelector('input.nome')
const nomeSpanError = document.querySelector('span.nome')

const sobrenomeInput = document.querySelector('input.sobrenome')
const sobrenomeSpanError = document.querySelector('span.sobrenome')

const emailInput = document.querySelector('input.email')
const emailSpanError = document.querySelector('span.email')

const senhaInput = document.querySelector('input.senha')
const senhaSpanError = document.querySelector('span.senha')


form.addEventListener('submit', e => {

  e.preventDefault()

  if(nomeInput.value === ""){
      nomeInput.classList.add('error')
      nomeSpanError.classList.add('error-text')
  } else {
      nomeSpanError.classList.remove('error-text')
      nomeInput.classList.remove('error')
  }

  if(sobrenomeInput.value === "") {
    sobrenomeInput.classList.add('error')
    sobrenomeSpanError.classList.add('error-text')
  } else {
    sobrenomeSpanError.classList.remove('error-text')
    sobrenomeInput.classList.remove('error')
  }

  if(emailInput.value === "") {
    emailInput.classList.add('error')
    emailSpanError.classList.add('error-text')
  } else {
    emailSpanError.classList.remove('error-text')
    emailInput.classList.remove('error')
  }

  if(senhaInput.value === "") {
    senhaInput.classList.add('error')
    senhaSpanError.classList.add('error-text')
  } else {
    senhaSpanError.classList.remove('error-text')
    senhaInput.classList.remove('error')
  }

})