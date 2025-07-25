let contador = 0

document.getElementById("butMais").addEventListener( "click", function(){
    contador++;
    document.getElementById("contador").innerText=contador;
});

document.getElementById("butMenos").addEventListener( "click", function(){
    contador--;
    document.getElementById("contador").innerText=contador;
})
document.getElementById("but_reset").addEventListener( "click", function(){
    contador = 0;
    document.getElementById("contador").innerText=contador;
})

