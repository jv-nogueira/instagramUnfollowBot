# Instagram Unfollow Bot

Desenvolvimento de bot personalizado para deixar de seguir automaticamente na plataforma do instagram, com exceção dos usernames que definir para permanecer seguindo e a quantidade de usernames que vai deixar de seguir. Não há necessidade de conhecimento em programação para a realização do download da extensão e utilização do bot

## Funcionamento

### Instalação e configuração da extensão
1. Copiar a pasta do repositório remoto para o repositório local (git clone https://github.com/jv-nogueira/instagramUnfollowBot.git)
2. Acessar o seu navegador e clicar em 'Gerenciar extensões'. Habilitar o 'Modo do desenvolvedor' (no meu caso, utilizei o navegador Edge)
3. Clicar em 'Carregar sem pacote' e em seguida abrir a pasta do repositório local
4. Verificar se a extensão 'instagramUnfollow' está habilitada (conforme a imagem abaixo)

![Visualização no navegador Edge da extensão instagramUnfollow](image/extensaoEdge.png)

### Configuração do bot no instagram
1. Abrir o instagram e atualizar a página, clicando na tecla 'F5' localizada na parte superior do teclado
2. Na aba do perfil do instagram, clicar em 'Seguindo' (conforme a imagem abaixo)
3. Após a página estar totalmente carregada, clique na tecla 'F2'
4. Ao abrir a mensagem de pop-up (conforme a imagem abaixo), insira a quantidade de seguidores que o bot vai deixar de seguir e clique em 'Ok' ou aperte 'Enter'
5. Insira quais usernames não é para o bot deixar de seguir e clique em 'Ok' ou aperte 'Enter'
6. O bot vai parar o funcionamento automaticamente ao atingir o limite de usernames que deixou de seguir, quando sair da tela de funcionamento ou quando o bot percorrer todos os usernames do instagram. O funcionamento do bot vai retomar quando clicar em 'F2' novamente
7. Não há necessidade de utilizar o editor de código para configurar o bot, mas quem estiver interessado em contribuir realizando implementações, fique a vontade. Não se esqueça de dar uma estrela ao projeto

<p float="flex">
  <img src="image/printSeguindo.png" alt="Visualização das pessoas que estão seguindo no Instagram" width="300px">
  <img src="image/printPromptQuantidade.png" alt="Visualização do prompt perguntando a quantidade para unfollow" width="300px">
</p>

## Observações

- O grupo Meta (facebook, instagram, whatsapp, messenger, etc.) tem restrições com o uso de bots, então uma recomendação seria evitar deixar de seguir muitas pessoas na mesma hora
- Deixe a página do instagram ativa enquanto o bot estiver em funcionamento, pois caso contrário, o bot pode não funcionar corretamente
- Não tem problema desligar o monitor enquanto o bot estiver em funcionamento, mas configure a economia de energia do seu PC para que a CPU não desligue sozinha por inatividade
- O bot foi testado em um sistema operacional Windows 10 Pro
- O idioma do instagram que o bot foi testado é o Português (Brasil). O bot pode não funcionar corretamente em outro idioma

## Contato

- E-mail: [jvnogueira2010@gmail.com](mailto:jvnogueira2010@gmail.com)
- LinkedIn: [www.linkedin.com/in/nogueira-jv](https://www.linkedin.com/in/nogueira-jv)
- GitHub: [www.github.com/jv-nogueira](https://github.com/jv-nogueira)