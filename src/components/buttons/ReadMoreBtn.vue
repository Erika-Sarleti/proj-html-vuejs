<template>
  <button><a href="*">Read more</a> </button>
</template>

<script>
export default {
    name: 'ReadMoreBtn'
}
</script>

<style scoped lang='scss'>
button{
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: .5rem 0;
    border: 2px solid #038483;
    background-color: transparent;
    border-radius:3px ;
    
    a{
        color: white;
        text-decoration: none;
        padding: .5rem 1.2rem;
    }
}
</style>