const $cambiarInterruptor = document.getElementById("cambiarInterruptor");
const $CambiarFoco = document.getElementById("CambiarFoco");
const $switch = document.querySelector(".switch");

function cambiarImagenes(){
    if($CambiarFoco.src.match("assets/encendido-1.png") && $cambiarInterruptor.src.match("assets/on-or.png")){
        $CambiarFoco.src = "assets/apagado-1.png";
        $cambiarInterruptor = "assets/off.png";
    }else{
        $CambiarFoco.src = "assets/encendido-1.png";
        $cambiarInterruptor = "assets/on-or.png";  
    }
}

$switch.addEventListener("click", cambiarImagenes);