<template>
  <a href="*">
    <span class="logo green">Nex</span><span class="logo">Gen</span> 
  </a>
</template>

<script>
export default {
  name: 'AppLogo',

}
</script>

<style scoped lang='scss'>
a{
  display: inline-block;
  text-decoration: none;
  padding:0.5rem 1.3em 0.5rem 0;
  border-radius: 100px;
  }

.logo{
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .25em;
  font-size: 1.5em;
  color:#babdbe;
}
.green{
  background-color: rgba($color: #038484, $alpha: 0.4);
  color: #51bdbc;
  margin-right:.1em ;
  padding:0.5rem 0 0.5rem 1.3em;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  
}

</style>