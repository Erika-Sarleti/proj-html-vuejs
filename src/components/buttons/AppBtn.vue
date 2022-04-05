<template>
  <button :class="cta == 'Get in touch' ? 'get-btn' : 'read-btn'"><a href="*" >{{cta}}</a> </button>
</template>

<script>
export default {
    name: 'AppBtn',
    props:{
        cta:String,
    }
}
</script>

<style scoped lang='scss'>
button{
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: .5rem 0;
    border: 2px solid #038483;
    border-radius:3px ;
}    
.get-btn{
    background-color: #038483;
}    
    
.read-btn{
    background-color: transparent;
   
}
 a{
        color: white;
        text-decoration: none;
        padding: .5rem 1.2rem;
    }  
</style>