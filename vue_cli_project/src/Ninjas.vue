<template>
  <div id="ninjasa">
    <ul>sadasas
       

      <!-- <li v-for="ninja in ninjas"> -->
      <li v-for="(ninja,index) in ninjas_data">  
        {{ninja}}
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.specialaity}}</h3>

      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data () {
    return {
      ninjas_data: [
        {name:'karan',speciality:'django',show:True},
        {name:'hemanta',speciality:'database',show:True},
        {name:'kritika',speciality:'dotnet',show:True},
        {name:'ishara',speciality:'php',show:True}
      ]
    }
  }
}
</script>