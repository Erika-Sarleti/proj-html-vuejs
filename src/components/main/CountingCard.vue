<template>
  <div class='container-info'>
    <div class="number">{{numberOf.length}}</div>
    <h3 class='title-info'>{{name}}</h3>
    <p class='par'>{{subtitle}}</p>
  </div>
</template>

<script>
export default {
    name: 'CountingCard',
    props:{
      numberOf: Array,
      name: String,
      subtitle: String
    }
}
</script>

<style scoped lang='scss'>
  .number{
    font-size: 2.5em;
    font-weight:700 ;
    color: #038483;
  }
  .title-info{
    font-size: 1.7em;
    padding-bottom: 1rem;
  }
  .par{
    width: 80%;
    color: #5e6063;
  }

</style>