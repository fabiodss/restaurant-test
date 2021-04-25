<h1 align="center">Restaurant Test</h1> 
<blockquote align="center">Este é um projeto desenvolvido utilizando EXPO React Native para teste.</blockquote>
</p>
<p align="center">
   <img src="https://i.ibb.co/HgJrHKz/prints.jpg" width="100%" style="max-width:100%;margin-top:30px;" />
</p>

## 💚 Guia de conteúdo

<li><a href="#introduction">Introdução</a></li><br>
<li><a href="#install">Instalação</a></li><br>
<li><a href="#structure">Estrutura</a></li><br>
<li><a href="#download">Download APK</a></li><br>

## <a id="introduction"></a> 🏁 Introdução

Aplicação de listagem de restaurantes com busca e exibição de detalhes utilizando API Rest. A tecnologia do projeto é o React Native com EXPO. O EXPO foi escolhido para facilitar atualizações [over the air](https://docs.expo.io/build/updates/).

## <a id="install"></a> 🚧 Instalação

Verifique se possui o [EXPO CLI](https://docs.expo.io/) instalado, ele é necessário para execução do projeto

Clone o repositório:
````
git clone https://github.com/fabiodss/restaurant-test.git
````
Instale as dependências necessárias para este projeto:

````
expo install
npm install
yarn install
````
Execute o projeto:

````
expo start
npm start
yarn start
````
Após inicialização em seu navegador, selecione a opção para executar em um emulador instalado e aberto em seu sistema. Para utilização em seu dispositivo móvel com hot reload, selecione a opção Tunnel, instale o App do [EXPO](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US) da loja e aponte a câmera para o QRCode.

Para gerar a build execute o comando:

````
expo build:android
expo build:ios
````

## <a id="structure"></a> ♻️ Estrutura do Projeto

### screens

<p>Essa pasta possui os as telas do aplicativo:</p>
<p>Home: Flatlist com loading a cada 20 itens, inclui campo de busca onde redireciona para tela Search ou pode ir diretamente para visualização das informações de um restaurante.</p>
<p>Search: Busca em tempo real a cada novo caracter no campo, ao ser aberta é pesquisado o parametro transferido da tela Home, também é possível visualizar informações de um restaurante.</p>
<p>Info: Informações do objeto obtida através da API Rest. As informações são carregadas previamente ao abrir a tela, pegando os parametros do objeto da tela anterior e atualizados logo em seguida realizando a consulta no servidor pelo ID específico, isso ajuda a diminuir significativamente o tempo de carregamento dessa tela.</p>

### components

<p>Pasta com componentes a serem importados nas telas e em outros componentes.</p>

### src

<p>Pasta com os principais recursos para estrutura do projeto: gerenciamento de rotas, requisição da API, configuração de URL padrão da API e funções de uso genérico.</p>

### styles

<p>Cores e estilos globais para serem utilizado em todo projeto com o objetivo de manter o padrão e reduzir código.</p>


## <a id="download"></a> 🍏 Download APK

Realize o download do APK da build para Android [Download APK](https://mega.nz/file/gcp00SSY#8wV60cMx7wFw-DEjkrrkKdXI_7Hohk7_bOmTihD1NuE) 

<br>
<br>
🚀 Desenvolvido por Fábio Silva
 
