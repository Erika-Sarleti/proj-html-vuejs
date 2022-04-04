<template>
  <nav>
        <div class="navbar-item" v-for='item in navbArr' :key="item.section ">
            <a :href="item.link">
                {{item.name}}   
            </a>
        </div>
  </nav>
</template>

<script>
export default {
    name: 'HeaderNavbar',
    data(){
        return{
            navbArr:[
                {
                    section: 'Home',
                    name: 'Home',
                    link: '*',
                },

                {
                    section: 'About',
                    name: 'About',
                    link: '*',
                },

                {
                    section: 'Projects',
                    name: 'Projects',
                    link: '*',
                },

                {
                    section: 'Process',
                    name: 'Process',
                    link: '*',
                },
    
                {
                    section: 'Testimonials',
                    name: 'Testimonials',
                    link: '*',
                },

                {
                    section: 'User-area',
                    name: 'User',
                    link: '*',
                    
                },
            ]
        }
    }
}
</script>

<style scoped lang='scss'>

.navbar-item{
    display: inline-block;
    margin-right: 1.5rem;
    a{
    color:white;
    text-decoration: none;
    text-transform: uppercase;
    &:hover{
        color:#038483;
    }
    }
}
    
</style>