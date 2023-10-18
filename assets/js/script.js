const [...li_servicos] = document.querySelectorAll('.li-servicos')

li_servicos.map(li => {
  li.addEventListener('mouseover', () => {
    resetStyle()

    li.classList.add('js-li-hover')
  })
})


function resetStyle(){
  let [...li_servicos] = document.querySelectorAll('.li-servicos')
  li_servicos.map(li => {
    li.classList.remove('js-li-hover')
  })
}