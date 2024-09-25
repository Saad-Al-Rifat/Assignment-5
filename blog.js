let acc = document.getElementsByClassName("accordion");
let accordions = document.getElementsByClassName('accordion')
let panels = document.getElementsByClassName('panel')
// let home = document.getElementById('home')
let close = document.getElementById('close');
let open = document.getElementById('open');

close.addEventListener('click', ()=>{
  document.getElementById('burger').style.display = 'none';
})
open.addEventListener('click', ()=>{
  document.getElementById('burger').style.display = 'block';
})


function home(){
  window.location.href = './index.html'  
}


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    for(let item of accordions){
      item.style.borderBottomLeftRadius = '0px';
      item.style.borderBottomRightRadius = '0px';
    }
    let panel = this.nextElementSibling;
    let plusMinus = this.querySelector('.plus-minus');

    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = 0;
      plusMinus.innerText = '+';

      for(let item of accordions){
        item.style.borderBottomLeftRadius = '8px';
        item.style.borderBottomRightRadius = '8px';
      }

      
    } else {
      panel.style.maxHeight = 'fit-content';
      panel.style.opacity = 1;
      plusMinus.innerText = '-';
    }
  });
}
