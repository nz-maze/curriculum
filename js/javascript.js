function jugar() {
  console.log("Hola Mundo");
  var eleccionUsuario=document.getElementById('combo').value;
  var eleccionComputadora=document.getElementById('eleccionComputadora');
  var mensaje=document.getElementById('mensaje');

  var numeroAzar=parseInt(Math.random()*3);
  var seleccionComputadora;

  if(numeroAzar==0){
    seleccionComputadora="Piedra";
  }
  if(numeroAzar==1){
    seleccionComputadora="Papel";
  }
  if(numeroAzar==2){
    seleccionComputadora="Tijera";
  }
  eleccionComputadora.innerHTML=seleccionComputadora;
  /////////////////////////////////////////////////////////////////
  if(eleccionUsuario==seleccionComputadora){
    mensaje.innerHTML="Es un Empate! Vuelve a Intertarlo";
    mensaje.style.color="black";
  }
  ////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Piedra" && seleccionComputadora=="Tijera"){
    mensaje.innerHTML="Ganaste! Piedra machaca Tijera";
    mensaje.style.color="green";
  }
  /////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Piedra" && seleccionComputadora=="Papel"){
    mensaje.innerHTML="Perdiste! El papel Envuelve a Piedra";
    mensaje.style.color="red";
  }
  ////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Papel" && seleccionComputadora=="Piedra"){
    mensaje.innerHTML="Ganaste! El papel Envuelve a Piedra";
    mensaje.style.color="green";
  }
  ////////////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Tijera" && seleccionComputadora=="Papel"){
    mensaje.innerHTML="Ganaste! La tijera corta el papel";
    mensaje.style.color="green";
  }
  ////////////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Tijera" && seleccionComputadora=="Piedra"){
    mensaje.innerHTML="Perdiste! Piedra machaca Tigera";
    mensaje.style.color="red";
  }
  /////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Papel" && seleccionComputadora=="Tijera"){
    mensaje.innerHTML="Perdiste! La tijera corta el papel";
    mensaje.style.color="red";
  }
  ////////////////////////////////////////////////////////////////////
  if(eleccionUsuario=="Piedra" && seleccionComputadora=="Papel"){
    mensaje.innerHTML="Perdiste! El papel Envuelve a Piedra";
    mensaje.style.color="red";
  }
}
