// ---------------------------------------------------------------
// VARIÁVEIS GLOBAIS 
// ---------------------------------------------------------------

// Busca todos os botões da página
let botoes = document.querySelectorAll(".drum");

// Busca pelo item com id alerta
let alerta = document.getElementById('alerta');

// Efeito de fade out no alerta inicial
alerta.classList.toggle("fadeOut");

// ---------------------------------------------------------------
// LÓGICA
// ---------------------------------------------------------------

// Adiciona um listener de cliques para cada um dos botões
for (var i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener('click', function () {

        tocar(this.innerHTML);
        animar(this.innerHTML)

        console.log("Letra clicada: " + this.innerHTML);
        
})};

// ---------------------------------------------------------------
// FUNÇÕES 
// ---------------------------------------------------------------

// Verifica a letra que foi teclada ou clicada
function tocar(letra){

    let partOfDrum;
    
    switch (letra) {
        case 'w': 
            partOfDrum = new Audio("/sounds/tom-1.mp3");
            break;
            
        case 'a': 
            partOfDrum = new Audio("/sounds/tom-2.mp3");
            break;
        
        case 's': 
            partOfDrum = new Audio("/sounds/tom-3.mp3");
            break;
            
        case 'd':  
            partOfDrum = new Audio("/sounds/tom-4.mp3");
            break;
        
        case 'j':  
            partOfDrum = new Audio("/sounds/snare.mp3");
            break;
            
        case 'k':  
            partOfDrum = new Audio("/sounds/kick-bass.mp3");
            break;

        case 'l':  
            partOfDrum = new Audio("/sounds/crash.mp3");
            break;

        case 'f5':
            break;
    
        default:
            animarFundo();
            break;        
    }
    
    // Toca a parte teclada/clicada
    partOfDrum.play(); 
}

// Realça o botão selecionado
function animar(letra){

    document.querySelector("." + letra).classList.add("pressed");

    // Seta um tempo para reverter a ação de alteração de classe
    setTimeout(() => {
        document.querySelector("." + letra).classList.remove("pressed");
    }, 100);
}

// Realça o fundo ao teclar uma letra inválida
function animarFundo(letra){

    document.querySelector("body").classList.add("wrong");

    // Seta um tempo para reverter a ação de alteração de classe
    setTimeout(() => {
        document.querySelector("body").classList.remove("wrong");
    }, 100);
}

// Verifica a letra que foi teclada na página e envia para a função tocar
addEventListener('keydown', function(event){

    var letraTeclada = event.key.toLowerCase();
    
    tocar(letraTeclada);
    animar(letraTeclada);
        
    console.log("Letra teclada: " + event.key);
});