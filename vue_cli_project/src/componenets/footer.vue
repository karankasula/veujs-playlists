<template>
    <footer>
       <h2>{{title}}</h2> 
    </footer>
</template>

<script>
export default {
  data () {
    return {
      title:'this is footer'
    }
  }
}
</script>
<style scoped>
footer{
    background:lightskyblue;
    padding: 10px;
}
h2{
    color:red;
    text-align: center;
}
</style>