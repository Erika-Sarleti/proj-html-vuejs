<template>
  <section class="width-1200">
    <div class="container-text">
      <div class="subtitle">Human Resources</div>
      <h1 class="big-title">Get More <span class='highlight'>Productivity</span> </h1> 
      <div class="text">Planning,recruitment and selection process and performance evaluation of employees</div>
    </div>
    
    <app-btn
    cta='Get in touch'/>
    <app-btn
    cta='Read more'/>
  </section>
</template>

<script>
// import GetInTouchBtn from '../buttons/GetInTouchBtn.vue'
import AppBtn from '../buttons/AppBtn.vue'
export default {
    name: 'AppJumbotron',
    components:{
      // GetInTouchBtn,
      AppBtn,
  

    }
}
</script>

<style scoped lang='scss'>
  .container-text{
    width: 50%;
  }
  button{
    margin-top:1.5em ;
    margin-right:.8rem;
  }

</style>