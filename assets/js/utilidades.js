let menuDesplegado = false;
let longMenu = $(".barra").height();
$("#iconmenu").on('click', function() {
    if (menuDesplegado) {
        $("#menu").css("display", "none");
        if (longMenu < 90) {
            $(".barra").css("height", "20vw")
        }
        menuDesplegado = false;
    } else {
        $("#menu").css("display", "block");
        console.log($(".barra").height());
        $(".barra").css("height", "100vh");
        menuDesplegado = true;
        console.log("desplegar");
    }
});