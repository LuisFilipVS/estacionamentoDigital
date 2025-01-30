
<script>
import WelcomeItem from './WelcomeItem.vue'


export default {
    methods: {
        dataFetch(){
            fetch('/api') // Substitua pela URL desejada
            .then(response => response.text()) // Obtém o HTML da página como texto
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html'); // Converte o HTML em um documento manipulável
                const h1Text = doc.querySelector('h1')?.textContent.trim(); // Obtém o texto da tag <h1>

                console.log(h1Text); // Exibe o conteúdo do <h1>
            })
            .catch(error => console.error('Erro ao buscar a página:', error));
        }
    }
}
</script>

<template>
      <div>
      <v-toolbar image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Estacionamento Digital</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <v-btn v-on:click="dataFetch">
        Button
    </v-btn>
</template>