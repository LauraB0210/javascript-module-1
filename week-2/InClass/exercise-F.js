function verificarUsuario(nombreUsuario,tipoUsuario){
let primeraletra = nombreUsuario[0]
if (tipoUsuario =="admin"|| tipoUsuario =="manager"){
return "Username valid"
}
else if (primeraletra === primeraletra.toUpperCase() && nombreUsuario.length > 5 && nombreUsuario.length <10){
    return "Username valid"
 }
 else{return "Username invalid"}
}
console.log(verificarUsuario("Jua","manager"))
