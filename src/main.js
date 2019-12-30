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
  template: '<div><ul><framework v-for="framework in frameworks" :key="framework.id"> {{ framework.titulo }} </framework></ul></div>',
  data(){
    return {
      frameworks: [
        { id: 1, titulo: 'VueJS' },
        { id: 2, titulo: 'Angular' },
        { id: 3, titulo: 'React'}
      ]
    }
  }
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

Vue.component('framework', {
  template: '<li><slot></slot></li>'
})

new Vue({
  el: '#app'  
})
