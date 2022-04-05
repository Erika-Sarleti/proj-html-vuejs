<template>
  <div class="container-card">
      <img :src="info.img" alt="">
      <p>{{info.project}}</p>
  </div>
</template>

<script>
export default {
    name:'ProjectCard',
    props:{
        info: Array,
    }
}
</script>

<style scoped>
.container-card{
    height: 100px;
    background-color: white;
}
</style>