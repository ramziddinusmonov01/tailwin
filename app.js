const btn = document.querySelector('.hamburger')
const modal = document.querySelector('.nav-modal')
const close = document.querySelector('.close')

btn.addEventListener('click', ()=>{
    modal.classList.add('openModal')
    console.log("salom");
})
close.addEventListener('click', () => {
    modal.classList.remove('openModal')
})