<template>
<section>
  <AppHeader/>
  <AppJumbotron/>
</section>
  
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppJumbotron from '@/components/AppJumbotron.vue'
export default {
    name: 'AppHome',
    components:{
      AppHeader,
      AppJumbotron
    }
}
</script>

<style scoped lang='scss'>
 section{
    background-color: black;
    height: 90vh;
    background:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/img/bg-4.jpg'); 
 }
</style>