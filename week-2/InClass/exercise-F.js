function nameverificacion (name, type){
    
    if  (type == "manager" || (type == "admin")){
        return "Username valid"
    }


    const length = name.length;
    if (length >5 || length <10){
        return "Username Invalid"
    }

    return "Username invalid"

}

console.log (nameverificacion(3, "admin"));
console.log (nameverificacion(14, "usuari"));
