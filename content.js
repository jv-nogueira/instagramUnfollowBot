    // Detalhes importantes: Evitar utilizar o jQuery para referenciar os elementos e sim utilizar as propriedades do javascript vanilla mesmo
    //Exemplo: ao invés de $("[class='algumaCoisa']") utilizar document.querySelectorAll(".")
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 113) {
var question = confirm("Pressione 'Ok' para o bot começar a funcionar")
    }
    if(question == true){
        var i=0
        var contadorUnfollow=0
        percorrer()
        function percorrer(){
            var profileReference = document.querySelectorAll('._aano')[0].children[0].children[0].children[i] // Referenciar cada perfil da lista
            var getUsername = profileReference.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML // Pegar o nome de usuário da lista
            var usernamesPermitidos = ['exemplo1', 'exemplo2', 'exemplo3']
        if(!usernamesPermitidos.includes(getUsername)){
            if(i<500){  // Limite da lista de usernames que vão ser percorridas (não necessariamente o bot vai deixar de seguir, conforme a variável 'usernamePermitidos')
                var limiteContador = 20;
                if(contadorUnfollow < limiteContador){ // Limite de usernames que o bot vai deixar de seguir
                setTimeout(() => {
                var buttonUnfollow = profileReference.children[0].children[0].children[0].children[2].children[0].children[0] // Botão para deixar de seguir  
                buttonUnfollow.scrollIntoView() // Este método rola a página para que o elemento fique vísivel 
                buttonUnfollow.click()
                        setTimeout(() => {
                            [...document.querySelectorAll('button')].find(el => el.textContent == "Deixar de seguir").click()
                            contadorUnfollow++
                            },3000)

                        setTimeout(() => {
                            i++
                            percorrer()
                            },5000)
                        },5000)
                    }else{
                        alert('Chegou ao limite de '+limiteContador+' pessoa(s) que o bot deixou de seguir!\n\n'+
                        'Para mudar isso, acesse o código-fonte e altere a váriavel "limiteContador" ou se preferir entre em contato pelo e-mail jvnogueira2010@gmail.com.')
                    };
                }
            }else{
                i++
                percorrer()
            };
        }
    }
});