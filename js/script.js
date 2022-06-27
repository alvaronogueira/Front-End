$ (document).ready(function () {

    $("#barra").click(function () {
        if($("#menu").hasClass("menu-ativo")) {
            $("#menu").removeClass("menu-ativo")
        }else{
            $("#menu").addClass("menu-ativo")
        }

    })

})

let menu = document.getElementById("menu")

function meuMenu() {
    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
}








