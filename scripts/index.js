
// Busca todos os botões da página
var botoes = document.querySelectorAll(".drum");

// Verifica a letra que foi teclada ou clicada
function tocar(letra){
    
    switch (letra) {
        case 'w': 
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case 'a': 
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case 's': 
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case 'd':  
            var tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case 'j':  
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
            
        case 'k':  
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'l':  
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
    
        default:
            console.log("A letra " + letra + " não produz nenhum som");
            break;
    }
}

// Realça o botão selecionado
function animar(letra){

    document.querySelector("." + letra).classList.add("pressed");

    // Seta um tempo para reverter a ação de alteração de classe
    setTimeout(() => {
        document.querySelector("." + letra).classList.remove("pressed");
    }, 100);
}

// Adiciona um listener de cliques para cada um dos botões
for (var i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener('click', function () {

        tocar(this.innerHTML);
        animar(this.innerHTML)

        console.log("Letra clicada: " + this.innerHTML);
        
})};

// Verifica a letra que foi teclada na página e envia para a função tocar
addEventListener('keydown', function(event){

    var letraTeclada = event.key.toLowerCase();
    
    tocar(letraTeclada);
    animar(letraTeclada);
        
    console.log("Letra teclada: " + event.key);
});