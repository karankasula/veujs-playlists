<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas_data" v-on:click="ninja.show=!ninja.show">  
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.speciality}}</h3>

      </li>
    </ul>
  </div>

</template>

<script>
export default {
    props:['ninjas'],
  data () {
    return {
      ninjas_data: [
        {name:'karan',speciality:'django',show:false},
        {name:'hemanta',speciality:'database',show:false},
        {name:'kritika',speciality:'dotnet',show:false},
        {name:'ishara',speciality:'php',show:false}
      ]
    }
  }
}
</script>
<style scoped>
    #ninjas{
        widows: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul{
        display: wrap;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>