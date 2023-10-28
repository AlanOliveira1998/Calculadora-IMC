const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const peso = document.getElementById('width').value
    const altura = document.getElementById('height').value

    const imc = (peso /(altura * altura)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''

    value.classList.add('attention')

    document.getElementById('infos').classList.remove('hidden')

    if(imc < 18.5){
        description = `Cuidado você está abaixo do seu peso ideal!`
    } else if(imc >= 18.5 && imc <= 25){
        description = `Você está no peso ideal`
        value.classList.remove('attention') //removendo o verde
        value.classList.add('normal') // adicionando o vermelho
    } else if(imc > 25 && imc <= 30){
        description = `Cuidado você está com sobrepeso!`
    } else if (imc >30 && imc <= 35){
        description = `Cuidado você está com obesidade moderada!`
    } else if(imc > 35 && imc <= 40){
        description = `Cuidado você está com obesidade severa!`
    }else{
        description = `Cuidado você está com obesidade morbida!`
    }

    value.textContent = imc.replace('.', ',')
    document.getElementById('description').textContent = description
})