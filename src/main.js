import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Componentes 

var componente1 = Vue.extend({
  template: '<h1>Hola - Introduction a componentes</h1>'
})

var componente2 = Vue.extend({
  template: '<h3>Listado de Framworks JS</h3>'
})

var componente3 = Vue.extend({
  template: '<ul><li>VueJS</li><li>Angular</li><li>React</li></ul>'
})

Vue.component('componente-saludo', componente1)

Vue.component('componente-titulo', componente2)

Vue.component('componente-lista', componente3)

new Vue({
  el: '#app'  
})
