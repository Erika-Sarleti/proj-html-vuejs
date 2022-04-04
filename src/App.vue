<template>
<div id="app">
   <InfoApp 
  :info='objInfo'
  />
  <AppHome/>
</div>
</template>

<script>
import InfoApp from './components/InfoApp.vue';
import AppHome from './components/AppHome.vue';

export default {
  name: 'App',
  components: {
    InfoApp,
    AppHome
  }, 
  data(){
    return{
      objInfo:{
          openHours: 'Mon - Sat - 9:00 - 18:00',
          phone: '+1 (305) 1234-5678',
          email: 'hello@example.com',
          address:'Main Avenue, 987',
          facebook: '*',
          twitter: '*',
          linkedin:'*',
        }
      
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@200;400;700;800&display=swap');
@import '@/assets/styles/styles.scss';
</style>
