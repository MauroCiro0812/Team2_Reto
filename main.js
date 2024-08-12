/*window.addEventListener("load", function(){
    document.getElementById("cambiarColor").addEventListener("click", function() {
        var colorFondo = document.getElementById("colorFondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colorFondo);
    })
})*/

/*function seleccionarTarjeta() {
    const inputPlaya = document.getElementById('playa');
    const inputMontaña = document.getElementById('montaña');
    const inputCiudad = document.getElementById('ciudad');
    const imagenMostrada = document.getElementById('imagenMostrada');

    
    if (inputPlaya.checked) {
        inputPlaya.innerHTML = 'Playa';
        imagenMostrada.src = '../Imagenes/1-playa.jpg';
        imagenMostrada.style.display = 'block';
        document.getElementById('playa').style.backgroundImage = 'block';
        document.getElementById('montaña').style.backgroundImage = 'none';
        document.getElementById('ciudad').style.backgroundImage = 'none';
    } else if (inputMontaña.checked) {
        inputMontaña.innerHTML = 'Montaña';
        imagenMostrada.src = '../Imagenes/2-montaña.jpg';
        imagenMostrada.style.display = 'block';
        document.getElementById('playa').style.backgroundImage = 'none';
        document.getElementById('montaña').style.backgroundImage = 'block';
        document.getElementById('ciudad').style.backgroundImage = 'none';
    } else if (inputCiudad.checked) {
        inputMontaña.innerHTML = 'Ciudad';
        imagenMostrada.src = '../Imagenes/3-ciudad.jpg';
        imagenMostrada.style.display = 'block';
        document.getElementById('playa').style.backgroundImage = 'none';
        document.getElementById('montaña').style.backgroundImage = 'none';
        document.getElementById('ciudad').style.backgroundImage = 'block';

        
    } else {
        alert("No seleccionaste ninguna tarjeta. Elige una");
        return;
    }

}*/

/*const main=document.main;
const cards=document.querySelectorAll('input[type="radio"]');

cards.forEach(card => {
    card.addEventListener('change', ()=>{
        const backGroundImage=document.querySelector('input[name="card"]:checked').value;

        main.style.backgroundImage=backGroundImage;
    });
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    
    const fondoImagen = document.getElementById('fondo-imagen');
    
    const radios = document.querySelectorAll('input[name="card"]');

    function actualizarFondo() {
        
        radios.forEach(radio => {
            if (radio.checked) {
                const valor = radio.value;
                fondoImagen.style.backgroundImage = `url('../Imagenes/${valor}.jpg')`;
                fondoImagen.style.backgroundSize = 'cover';
                fondoImagen.style.backgroundPosition = 'center'; 
            }
        });
    }
    
    radios.forEach(radio => {
        radio.addEventListener('change', actualizarFondo);
    });
});

document.querySelectorAll('input[name="card"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const selectedValue = this.value;
        console.log(`Radio button selected: ${selectedValue}`);
        const mainElement = document.getElementById('fondo-imagen');
        mainElement.style.backgroundImage = `url('../Imagenes/${selectedValue}.jpg')`;
    });
});*/

function validarSeleccion(event) {
    // Obtén todos los radio buttons con nombre "card"
    var radios = document.getElementsByName('card');
    var seleccionado = false;

    // Recorre todos los radio buttons para ver si alguno está seleccionado
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            seleccionado = true;
            break;
        }
    }

    // Si no hay ninguno seleccionado, muestra una alerta
    if (!seleccionado) {
        alert('Por favor, selecciona una opción.');
        event.preventDefault(); // Previene la navegación
        return false; // Previene el envío del formulario
    }

    return true; // Permite el envío del formulario si fuera un submit
}
