<template>
  <section class="width-1200">
    <div class="container-text">
      <div class="subtitle">Human Resources</div>
      <h1>Get More <span>Productivity</span> </h1> 
      <div class="text">Planning,recruitment and selection process and performance evaluation of employees</div>
    </div>
    <get-in-touch-btn/>
    <read-more-btn/>
  </section>
</template>

<script>
import GetInTouchBtn from './buttons/GetInTouchBtn.vue'
import ReadMoreBtn from './buttons/ReadMoreBtn.vue'
export default {
    name: 'AppJumbotron',
    components:{
      GetInTouchBtn,
      ReadMoreBtn,
  

    }
}
</script>

<style scoped lang='scss'>
section{
  margin: auto;
  .container-text{
    width: 50%;
    .subtitle{
      color: #51bdbc;
      text-transform: uppercase;
    }
    h1{
      font-size: 70px;
      font-weight: 800;
      line-height: 1.2em;
      span{
        background:linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba($color: #038483, $alpha: .4) 50% 85%,rgba(0,0,0,0) 85%); 
      }
    }
    .text{
      font-size: 1.3em;
      color: #babdbe;
      padding: 1.2em 0;
    }
  }
  button{
    margin-top:1.5em ;
    margin-right:.8rem;
  }
}
</style>