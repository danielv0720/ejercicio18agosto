function Buscardor(){

let usuario=document.getElementById("usuario").value;
let contrasena=document.getElementById("password").value

if(usuario ===""|| contrasena ==="")
alert("llenar todos los datos")

if(usuario === "danielv0911" && contrasena === "velez0911*"){
window.location.href="../index2.html"
}else{
  alert("Los campos son invalidos")
}
}