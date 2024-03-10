    // Detalhes importantes: Evitar utilizar o jQuery para referenciar os elementos e sim utilizar as propriedades do javascript vanilla mesmo
    // Exemplo: ao invés de $("[class='algumaCoisa']") utilizar document.querySelectorAll(".algumaCoisa")
    // O motivo é que as extensões estão apresentando mau funcionamento com o framework jQuery
document.addEventListener("keydown", function(event) {
    var standardMessage = "\n\nSupport: jvnogueira2010@gmail.com";
    if (event.keyCode === 113) {
        var question = prompt("Digite no campo abaixo quantas pessoas quer que o bot deixe de seguir:*"+
        standardMessage)
    };
    if(question > 0){
        var questionUsernames = prompt("Digite no campo abaixo quais perfis quer que o bot ignore, ou seja, quer que permaneça seguindo.\n\n"+
        "Exemplo: 'username1', 'username2', 'username3'\n\n"+
        "Preste atenção aos detalhes da vírgula e das aspas, caso contrário, o bot não vai funcionar corretamente."+
        standardMessage)
        var i=0
        var contadorUnfollow=0
        percorrer()
        function percorrer(){
            var profileReference = document.querySelectorAll('._aano')[0].children[0].children[0].children[i] // Referenciar cada perfil da lista
            var getUsername = profileReference.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML // Pegar o nome de usuário da lista
            var usernamesPrompt = questionUsernames.slice(1, -1).split("', '")
            var usernamesPermitidos = [usernamesPrompt][0]
            var limiteContador = question;
            var buttonUnfollow = profileReference.children[0].children[0].children[0].children[2].children[0].children[0] // Botão para deixar de seguir  
            if(!usernamesPermitidos.includes(getUsername)){
                if(contadorUnfollow < limiteContador){ // Limite de usernames que o bot vai deixar de seguir
                    setTimeout(() => {
                        buttonUnfollow.scrollIntoView() // Este método rola a página para que o elemento fique vísivel 
                        buttonUnfollow.click()
                        setTimeout(() => {
                            [...document.querySelectorAll('button')].find(el => el.textContent == "Deixar de seguir").click() // As duas opções são: 'Deixar de seguir' ou 'Cancelar'
                            contadorUnfollow++
                        },3000)
                        setTimeout(() => {
                            i++
                            percorrer()
                        },5000)
                    },5000)
                }else{
                    alert('Chegou ao limite de '+limiteContador+' pessoa(s) que o bot deixou de seguir!'+
                    standardMessage)
                };
            }else{
                i++
                setTimeout(() => {
                    profileReference.scrollIntoView()
                    percorrer()
                },1500)
            };
        }
    }else if(typeof question == 'string' && question != 0){
        alert('Digite apenas números!'+
        standardMessage)
    }else if(question == 0){
        alert('Digite um número acima de 0!'+
        standardMessage)
    }
});

// Próximo passo 1: Implementar pop-up de erro


