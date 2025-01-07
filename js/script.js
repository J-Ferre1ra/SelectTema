const btnSwitch = document.querySelector('.toggle-input')
let title = document.querySelector('h1')
let subtitle = document.querySelector('h2')
let footerP = document.querySelector('p')

btnSwitch.addEventListener('click', ()=>{
    const body = document.querySelector('body')
    if(btnSwitch.checked){
        body.style.backgroundColor = '#2e2d2d'
        title.style.color = '#ffffff'
        subtitle.style.color = '#ffffff'
        footerP.style.color = '#ffffff'
    }else{
        body.style.backgroundColor = '#e4e4e4'
        title.style.color = '#000000'
        subtitle.style.color = '#000000'
        footerP.style.color = '#000000'
    }
})