  const btnMobile = document.querySelector("#btn-mobile")
const nome = document.querySelector("#load");
function typeWriter(el){
  const text = el.innerHTML.split("");
  el.innerHTML = '';
  
  text.forEach((l,i) => {
    setTimeout(() => el.innerHTML += l, 100 * i);
    // const cor = Math.floor(Math.random()*16777215).toString(16);
    el.style.color = "#00bfff";
  });
  setInterval(()=> typeWriter(el),8000);
  
}
typeWriter(nome);

function toggleMenu (e){
  if(e.type === 'touchstart') e.preventDefault();
  const  nav = document.querySelector('.inicio');
  nav.classList.toggle('active') 
  const active = nav.classList.contains('active');
  e.currentTarget.setAttribute('aria-expanded', active);
  if(active){
    e.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  }else{
    e.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}
btnMobile.addEventListener('click',toggleMenu)
btnMobile.addEventListener('touchstart',toggleMenu)

