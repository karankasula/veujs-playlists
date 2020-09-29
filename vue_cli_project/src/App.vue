<template>
  <div>
    <!-- {{title}} -->
    
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>
<script>
import ninjas from './componenets/ninjas.vue';
import header from './componenets/header.vue';
import Footer from './componenets/footer.vue';
export default {
  components:{
    'app-ninjas':ninjas,
    'app-header':header,
    'app-footer':Footer
      },
  data () {
    return {
      title: 'Ninja app'
    }
  }
}
</script>



<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
