(function(){
  let ripple = document.querySelector('.ripple')
  let button = document.querySelector('.click')
  let i = 0
  let p = button.getBoundingClientRect().width
  button.onclick = e =>{
    let x = e.layerX
    let y = e.layerY
    let interval = setInterval(()=>{
      if(i>100){
        i = 0
        clearInterval(interval)
      }else{
        i++
      }
      let prop = ripple.getBoundingClientRect()
      ripple.style.top = `${y-(p*i/200)}px`
      ripple.style.left = `${x-(p*i/200)}px`
      ripple.style.width = `${i}%`
      ripple.style.height = `${i}%`
    }, 0.001)
  }
}())