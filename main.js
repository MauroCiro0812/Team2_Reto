window.addEventListener("load", function(){
    document.getElementById("cambiarColor").addEventListener("click", function() {
        var colorFondo = document.getElementById("colorFondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colorFondo);
    })
})