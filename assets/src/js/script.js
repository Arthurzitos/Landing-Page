class Validator {
    constructor() {
        this.validations = [

        ]
    }
}



let form = document.getElementById("register-form")
let submit = document.getElementById('btn-verde')

let validator = new Validator()

//  evento que dispara as validações:
submit.addEventListener('click', function(e) {
    e.preventDefault()

    console.log('agora foi')
})

