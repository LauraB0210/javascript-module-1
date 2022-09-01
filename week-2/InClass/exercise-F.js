function nameverificacion (name, type){
    
    if  (type == "manager" || (type == "admin")){
        return "Username valid"
    }


    const length = name.length;
    if (length <5 || length >10){
        return "Username Invalid"
    }

    return "Username valid"

}

console.log (nameverificacion("angelo", "admin"));
console.log (nameverificacion("angelo", "noaplica"));
