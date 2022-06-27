$(document).ready(function () {

    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 2000)

    function slide(){
        if($(".banner-ativo").next().length){
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass().hide()
            $("#carrossel img:eq(0)").addClass("banner-ativo").show()
        }
    }





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








