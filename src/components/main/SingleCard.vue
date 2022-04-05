<template>
  <div class="card-container">
      <div class="icons">
        <img :src="aboutInfo.icon" alt="">
      </div>
      <h3 v-show='aboutInfo.title'>{{aboutInfo.title}}</h3>
      <p>{{aboutInfo.p}}</p>
  </div>
</template>

<script>
export default {
  props:{
    aboutInfo: Object,
  }

}
</script>

<style scoped lang='scss'>
.card-container{
  width: 320px;
  background-color:white;
  padding: 2.5em 2.5em;
  border-radius: 10px;

  .icons{
    background-color: #DAECED;
    width: 40px;
    height: 40px;
    margin-bottom: .7em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    img{

      width: 20px;
    }
  }
  h3{
    padding-bottom: .6em;
  }
}
  
</style>