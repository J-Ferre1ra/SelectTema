const btnSwitch = document.querySelector('.toggle-input')

btnSwitch.addEventListener('click', ()=>{
    const body = document.querySelector('body')
    if(btnSwitch.checked){
        body.style.backgroundColor = '#191818'
    }else{
        body.style.backgroundColor = '#e4e4e4'
    }
})