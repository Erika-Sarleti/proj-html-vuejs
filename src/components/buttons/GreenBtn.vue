<template>
    <button><a href="*">{{cta}}</a></button>
</template>

<script>
export default {
name: 'GreenBtn',
props:{
    cta:String
}
}
</script>

<style scoped lang='scss'>
    button{
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-size: 1.2rem;
        padding: .5rem 0;
        background-color: transparent;
        border: 2px solid #038483;
        border-radius:3px ;
        
        a{
        color: #038483;
        text-decoration: none;
        padding: .5rem 1.2rem;
        
        }
    }
</style>