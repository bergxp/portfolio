  
const nome = document.querySelector("#load");
function typeWriter(el){
  const text = el.innerHTML.split("");
  console.log(text)
  el.innerHTML = '';

  text.forEach((l,i) => {
    setTimeout(() => el.innerHTML += l, 100 * i);
  });
  setInterval(()=> typeWriter(el),9000);
  
}
typeWriter(nome);

