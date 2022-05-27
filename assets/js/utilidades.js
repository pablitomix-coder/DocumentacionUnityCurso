let menuDesplegado = false;
let longMenu = $(window).width();
$("#iconmenu").on('click', function() {
    if (menuDesplegado) {
        $("#menu").css("display", "none");
        if (longMenu < 500) {
            $(".barra").css("height", "20vw")
        } else if (longMenu >= 500 && longMenu < 576) {
            $(".barra").css("height", "18vw")
        } else if (longMenu >= 576 && longMenu < 768) {
            $(".barra").css("height", "16vw")
        } else if (longMenu >= 768) {
            $(".barra").css("height", "13vw")
        }
        menuDesplegado = false;
    } else {
        $("#menu").css("display", "block");
        longMenu = $(window).width();
        console.log(longMenu);
        $(".barra").css("height", "100vh");
        menuDesplegado = true;
        console.log("desplegar");
    }
});