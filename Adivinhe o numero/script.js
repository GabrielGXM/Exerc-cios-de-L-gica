let numeroSecreto = Math.floor(Math.random() * 100) + 1;

document.getElementById("check").addEventListener("click", function(){

    let palpite = Number(document.getElementById("numberInput").value);
    let mensagem = "";

    
    if (palpite === numeroSecreto) {
        mensagem = "🎉 Parabéns! Você acertou!";
    } else if (palpite < numeroSecreto) {
        mensagem = "🔼 Muito baixo! Tente um número maior.";
    } else {
        mensagem = "🔽 Muito alto! Tente um número menor.";
    }

    document.getElementById("result").innerText = mensagem;
});

document.getElementById("try").addEventListener("click", function(){

     numeroSecreto = Math.floor(Math.random() * 100) + 1;

});