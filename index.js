const mmain = document.querySelector('.mmain')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn2.onclick = () => {
    mmain.classList.add('col')
    btn2.backgroundcolor = 'red'
}

 btn1.onclick = () => {
    mmain.classList.remove('col')
 }
