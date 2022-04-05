<template>
  <header class='width-1200'>
    <AppLogo/>
    <div class="nav-section">
      <HeaderNavbar/>
      <app-btn
      cta='Get in touch'/>
    </div> 
  </header>
</template>

<script>
import AppLogo from './header/AppLogo.vue'
import HeaderNavbar from './header/HeaderNavbar.vue'
import AppBtn from '../buttons/AppBtn.vue'

export default {
    name: 'AppHeader',
    components:{ 
      AppLogo,
      HeaderNavbar,
      AppBtn,


    }
}
</script>

<style scoped lang='scss'>
header{
  padding: 3em 0;
  display: flex;
  justify-content: space-between;
}
.nav-section{
  display: flex;
  align-items: center;
  font-size: 1.2em;

}
</style>