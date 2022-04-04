<template>
  <header>
    <AppLogo/>
    <div class="nav-section">
      <HeaderNavbar/>
      <GetInTouchBtn/>
    </div> 
  </header>
</template>

<script>
import AppLogo from './header/AppLogo.vue'
import HeaderNavbar from './header/HeaderNavbar.vue'
import GetInTouchBtn from './GetInTouchBtn.vue'

export default {
    name: 'AppHeader',
    components:{ 
      AppLogo,
      HeaderNavbar,
      GetInTouchBtn,


    }
}
</script>

<style scoped lang='scss'>
header{
  
  width: 1200px;
  padding: 3em 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav-section{
  display: flex;
  align-items: center;
  font-size: 1.2em;

}
</style>