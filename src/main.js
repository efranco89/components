import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Componentes 

// var componente1 = Vue.extend({
//   template: '<h1>Hola - Introduction a componentes</h1>'
// })

var componente2 = Vue.extend({
  template: '<h3> {{ subtitulo }}</h3>',
  data(){
    return {
      subtitulo: 'Listado de Framworks JS'
    }
  }
})

var componente3 = Vue.extend({
  template: '<ul><li>VueJS</li><li>Angular</li><li>React</li></ul>'
})

Vue.component('componente-saludo', {
  data(){
    return {
      titulo: 'Hola - Introduccion a componentes'
    }
  },
  methods: {
    display(){
      console.log('Hola Mundo');
    }
  }
})

Vue.component('componente-titulo', componente2)

Vue.component('componente-lista', componente3)

new Vue({
  el: '#app'  
})
