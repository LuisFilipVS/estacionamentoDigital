
<script setup>
import { reactive } from 'vue';

const data = reactive([
  { id: 1, estado: 'inativo', distancia: 0 },
  { id: 2, estado: 'inativo', distancia: 0 },
  { id: 3, estado: 'ativo', distancia: 0 },
  { id: 4, estado: 'inativo', distancia: 0 },
  { id: 5, estado: 'inativo', distancia: 0 }
]);

var leituras = reactive([

]);

const dataFetch = () => {
            fetch('/api') // Substitua pela URL desejada
            .then(response => response.text()) // Obtém o HTML da página como texto
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html'); // Converte o HTML em um documento manipulável
                const h1Text = doc.querySelector('h1')?.textContent.trim(); // Obtém o texto da tag <h1>

                //console.log(h1Text); // Exibe o conteúdo do <h1>
                return h1Text
            })
            .catch(error => console.error('Erro ao buscar a página:', error));
            
};
        
const atualizarDados = () => { 
    var soma = 0
    data.forEach(element => {
        element.id = 10;
        });
    for (let i = 0; i < 10 ; i++){
      let leitura = dataFetch();
      console.log(leitura);
      leituras.push(leitura);
      soma += leitura
    }
    console.log("Media eh " + soma/10 + " Cm");
    };

</script>


<template>
    <div >
      <v-toolbar class="menuTopo" image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon style="color: white;"></v-app-bar-nav-icon>
        <v-toolbar-title style="color: white;">Estacionamento Digital</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon style="color: white;">mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  
    <div class="containerContent">
      <div class="body">
        <div class="titulo">
          <h3>CONTROLE DE VAGAS</h3>
        </div>
  
        <div class="estacionamento">
          <div v-for="vaga in data" :key="vaga.id" :class="vaga.estado === 'inativo' ? 'vagaInativa' : 'vagaAtiva'">
            <div class="vagaTexto">{{ vaga.estado }} - {{ vaga.id }}</div>
            <div class="vagaIcone">
              <v-icon v-if="vaga.estado === 'inativo'">mdi-close-circle</v-icon>
              <v-icon v-else>mdi-circle</v-icon> 
            </div>
          </div>
        </div>
  
        <div class="containerBotao">
          <v-btn class="botao" @click="atualizarDados">Atualizar</v-btn>
        </div>
      </div>
    </div>
  </template>

<style>

.menuTopo {
    color: white;
}

.body{
    display: grid;
    color: white;
    grid-template-columns: repeat(4, 1fr);
}

.titulo{
    vertical-align:middle;
    text-align: center;
    grid-column-start: 2;
    grid-column-end: 3;
}

.estacionamento{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}

.vagaInativa{
    min-height: 200px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 2px;
    flex-direction: column;
    padding: 10px;
    background-color: grey;
}

.vagaAtiva{
    min-height: 200px;
    min-width: 100px;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    margin: 2px;
    background-color: green;
}

.containerBotao{
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    padding: 10px;
    justify-content: center;
}

.botao{
    width: 20%;
}

.containterContent{
    display: flex;
    justify-content: center;
}

.vaga-texto {
    width: 100%;
    text-align: center;
    margin-bottom: auto;
}

.vaga-icone {
    margin-top: auto;
}

</style>