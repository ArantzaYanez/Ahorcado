function id( str ){
    return document.getElementById (str);
}


function obtener_random(num_min, num_max){
    const amplitud_valores = num_max - num_min; //valor ams alto -valor mas bajo del rambom
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores);
    + num_min;
    return valor_al_azar;

}
function mostrar(){
    document.getElementById("incluir").style.display = "block";
}
function ocultar(){
    document.getElementById("incluir").style.display = "none";
}

