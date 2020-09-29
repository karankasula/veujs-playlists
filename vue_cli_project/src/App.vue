<template>
  <div>
    <!-- {{title}} -->
    
    <router-view></router-view>
    <p>Above header or footer is implemented in rotuer with '/'' and '/add' url resp</p>
    <app-header></app-header>
    <!-- below this is props passing -->
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
    <app-slots>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am html tag passed from paretn compontnt to child component</p>
      <div slot="form-header">
        <h3>This is title of form</h3>
      </div>
      <div slot="form-fields">
        <label>slot form name:</label>
        <input type="text" placeholder="name" required/>
        <input type="password" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button>submit</button>
      </div>
      <div
    </app-slots>
    <h1>Example of dynamic components</h1>
    <!-- keep-alive is for retaining the value of component rather than destroying it -->
    <keep-alive><component v-bind:is="component"></component></keep-alive>
    
    <button v-on:click="component='app-header'">show header</button>
    <button v-on:click="component='app-footer'">show footer</button>
    <h1>Blog example</h1>
    <app-blog></app-blog>
  </div>
</template>
<script>
import ninjas from './componenets/ninjas.vue';
import header from './componenets/header.vue';
import Footer from './componenets/footer.vue';
import slots from './slots.vue';
import addblog from './componenets/addblog.vue'
export default {
  components:{
    'app-ninjas':ninjas,
    'app-header':header,
    'app-footer':Footer,
    'app-slots':slots,
    'app-blog':addblog
      },
  data () {
    return {
      component:'',
      title: 'I am dynamic slot title',
      ninjas: [
        {name:'karan',speciality:'django',show:false},
        {name:'hemanta',speciality:'database',show:false},
        {name:'kritika',speciality:'dotnet',show:false},
        {name:'ishara',speciality:'php',show:false}
      ]

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
