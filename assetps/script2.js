

function personaje1(){
  const buscar= document.getElementById("buscar").value
  fetch(`https://rickandmortyapi.com/api/character/${buscar}`)
  .then(response => response.json())
  .then(data => printpersonaje(data))
}

function printpersonaje(data) {
  const cardpersonaje = document.getElementById("cardpersonaje");
  let card =
     `<div class="card" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4>personaje : ${data.id}</h4>
      <h4>${data.name}</h4>
    </div>
  </div>`
  
  cardpersonaje.innerHTML=card
}

function personaje2(){
  const buscar2= document.getElementById("buscar2").value
  fetch(`https://rickandmortyapi.com/api/character/`)
  .then(response => response.json())
  .then(data => printpersonaje2(data.results, buscar2))
}

function printpersonaje2(data,buscar2) {
  console.log(data)
  const cardpersonaje2 = document.getElementById("cardpersonaje2");
let card2 ="";
for (let i = 0; i < buscar2; i++) {
  card2+= 

 `<div class="mt-2 mr-3 card" style="width: 18rem;">
  <img src="${data[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h4>personaje : ${data[i].id}</h4>
    <h4>${data[i].name}</h4>
  </div>
</div>`

}
cardpersonaje2.innerHTML=card2
}

function borrar(){
  
  const borrar=document.getElementById("buscar")
  const borrar2=document.getElementById("buscar2")
  cardpersonaje.innerHTML=''
  cardpersonaje2.innerHTML=''
  borrar.value=''
  borrar2.value=''
  }
