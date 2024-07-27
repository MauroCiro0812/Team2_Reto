/*window.addEventListener("load", function(){
    document.getElementById("cambiarColor").addEventListener("click", function() {
        var colorFondo = document.getElementById("colorFondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colorFondo);
    })
})

function seleccionarTarjeta() {
    const inputPlaya = document.getElementById('playa');
    const inputMontaña = document.getElementById('montaña');
    const inputCiudad = document.getElementById('ciudad');
    const imagenMostrada = document.getElementById('imagenMostrada');

    
    if (inputPlaya.checked) {
        inputPlaya.innerHTML = 'Playa';
        imagenMostrada.src = '';
        imagenMostrada.style.display = 'block';
        document.getElementById('playa').style.display = 'block';
        document.getElementById('montaña').style.display = 'none';
        document.getElementById('ciudad').style.display = 'none';
    } else if (inputMontaña.checked) {
        inputMontaña.innerHTML = 'Montaña';
        imagenMostrada.src = '';
        imagenMostrada.style.display = 'block';
        document.getElementById('playa').style.display = 'none';
        document.getElementById('montaña').style.display = 'block';
        document.getElementById('ciudad').style.display = 'none';
    } else if (inputCiudad.checked) {
        inputMontaña.innerHTML = 'Ciudad';
        imagenMostrada.src = '';
        imagenMostrada.style.display = 'block';
        document.getElementById('playa').style.display = 'none';
        document.getElementById('montaña').style.display = 'none';
        document.getElementById('ciudad').style.display = 'block';

        
    } else {
        alert("No seleccionaste ninguna tarjeta. Elige una");
        return;
    }

}*/

const main=document.main;
const cards=document.querySelectorAll('input[type="radio"]');

cards.forEach(card => {
    card.addEventListener('change', ()=>{
        const backGroundImage=document.querySelector('input[name="card"]:checked').value;

        main.style.backgroundImage=backGroundImage;
    });
});
