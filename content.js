    // Detalhes importantes: Evitar utilizar o jQuery para referenciar os elementos e sim utilizar as propriedades do javascript vanilla mesmo
    // Exemplo: ao invés de $("[class='algumaCoisa']") utilizar document.querySelectorAll(".algumaCoisa")
    // O motivo é que as extensões estão apresentando mau funcionamento com o framework jQuery
document.addEventListener("keydown", function(event) {
    var standardMessage = "\n\nSupport: jvnogueira2010@gmail.com";
    if (event.keyCode === 113) {
        var question = prompt("Digite no campo abaixo a quantidade de pessoas que o bot vai deixar de seguir (unfollow):*"+
        standardMessage)
    };
    if(question > 0){
        var questionUsernames = prompt("Digite no campo abaixo quais perfis quer que o bot ignore, ou seja, quer que permaneça seguindo.\n\n"+
        "Exemplo: 'username1', 'username2', 'username3'\n\n"+
        "Preste atenção aos detalhes da vírgula e das aspas, caso contrário, o bot não vai funcionar corretamente."+
        standardMessage)
        var i=0
        var contadorUnfollow=0
        var arrayArmazenarNameAndUsername = [];
        percorrer()
        function percorrer(){
            var profileReference = document.querySelectorAll('._aano')[0].children[0].children[0].children[i] // Referenciar cada perfil da lista
            var lastIndex = document.querySelectorAll('._aano')[0].children[0].children[0].children.length -1 // Referencia o last index da lista de perfis
            var lastElementIndex = document.querySelectorAll('._aano')[0].children[0].children[0].children[lastIndex] // Visualiza o last element do index da lista de perfis
            var viewProfile = profileReference.scrollIntoView() // Rola a página para que o elemento fique vísivel 
            var getUsernameOrName = profileReference.children[0].children[0].children[0].children[1].children[0].children[0]
            var getName = getUsernameOrName.children[1].children[0].innerText // Pegar o nome da lista
            var getUsername = getUsernameOrName.children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerHTML // Pegar o username da lista
            var getUsernameAndName = {getName, getUsername}
            var limiteContador = question;
            var buttonUnfollow = profileReference.children[0].children[0].children[0].children[2].children[0].children[0] // Botão para deixar de seguir 
            if(questionUsernames != null){
                var usernamesPrompt = questionUsernames.slice(1, -1).split("', '")
                var usernamesPermitidos = [usernamesPrompt][0]
                if(!usernamesPermitidos.includes(getUsername)){
                    viewProfile
                    if(contadorUnfollow < limiteContador){ // Limite de usernames que o bot vai deixar de seguir
                        arrayArmazenarNameAndUsername.push(getUsernameAndName)
                        setTimeout(() => {
                            buttonUnfollow.click()
                            setTimeout(() => {
                                [...document.querySelectorAll('button')].find(el => el.textContent == "Deixar de seguir").click() // As duas opções são: 'Deixar de seguir' ou 'Cancelar'
                                contadorUnfollow++
                            },getRandomSeconds(2))
                            setTimeout(() => {
                                i++
                                percorrer()
                            },getRandomSeconds(4))
                        },getRandomSeconds(4))
                    }else{
                        var removeWhiteSpace = limiteContador.replace(/\s/g, '')
                        var singular = "" 
                        var plural = ""
                        if(limiteContador > 1){
                            plural = "s"
                        }else{
                            singular = ""
                        };
                        var questionFinal = confirm('Chegou ao limite de '+removeWhiteSpace+' pessoa'+singular+plural+' que o bot deixou de seguir!\n\n'+
                        "Deseja a lista com as pessoas que o bot deixou de seguir? Clique em 'Ok' ou aperte 'Enter' para o download do arquivo 'unfollowList.txt'"+
                        standardMessage)
                        if(questionFinal == true){
                            // Criar o conteúdo do CSV
                            var csvContent = "\uFEFFNome\tUsername\n";
                            arrayArmazenarNameAndUsername.forEach(function (item) {
                            csvContent += item.getName + "\t" + item.getUsername + "\n";
                            });

                            // Criar um Blob com o conteúdo do CSV
                            var blob = new Blob([csvContent], { type: "text/txt" });

                            // Criar um link para o Blob
                            var link = document.createElement("a");
                            link.href = window.URL.createObjectURL(blob);

                            // Definir o nome do arquivo
                            link.download = "unfollowList.txt";

                            // Adicionar o link à página e clicar automaticamente para iniciar o download
                            document.body.appendChild(link);
                            link.click();

                            // Remover o link da página
                            document.body.removeChild(link);
                        }
                    };
                }else if(i < lastIndex){
                    i++
                    percorrer()
                }else{
                    setTimeout(() => {
                        lastElementIndex.scrollIntoView()
                        setTimeout(() => {
                            percorrer()
                        },getRandomSeconds(1))
                    },getRandomSeconds(1))
                }
            }
        }
    }else if(typeof question == 'string' && question != 0){
        alert('Digite apenas números!'+
        standardMessage)
    }else if(question == 0){
        alert('Digite um número acima de 0!'+
        standardMessage)
    } 


    function getRandomSeconds(sum){
        let sec222 = Math.random() * 2 + sum; // Multiplica um random number e soma 
        sec222 =  parseFloat(sec222.toFixed(3))*1000; // Diminui para 3 casas decimais, converte de string para number e multiplica por 1000 que corresponde a 1 segundo
        return sec222; // retorna o resultado aleatorio em segundos 
    }
});