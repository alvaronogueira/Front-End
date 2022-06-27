$ (document).ready(function () {

    $("#barra").click(function () {
        $("#menu").toggleClass("menu-ativo")
    })

    /* Podemos também fazer desse jeito, mais longo */    
    //     if($("#menu").hasClass("menu-ativo")) {
    //         $("#menu").removeClass("menu-ativo")
    //     }else{
    //         $("#menu").addClass("menu-ativo")
    //     }

})

let menu = document.getElementById("menu")

function meuMenu() {
    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
}








