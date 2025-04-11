const frm = document.querySelector('form')
const resp = document.querySelector('.resposta')

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const resposta = frm.inCorreto.checked
    
    if(resposta) {
        resp.innerText = `Parabens está correto`
        resp.style.color = "blue" 
    } else {
        resp.innerText = `Está errado`
        resp.style.color = "red" 
    }
})