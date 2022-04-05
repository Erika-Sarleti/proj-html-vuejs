<template>
  <nav>
        <div class="navbar-item" v-for='item in arrProject' :key="item.name ">
            {{item.name}}   
        </div>
  </nav>
</template>

<script>
export default {
    name: 'ProjectsNavbar',
    data(){
        return{
            arrProject: [
                {
                    name:'All',
                },
                {
                    name:'Institutional',
                },
                {
                    name:'Social',
                },
                {
                    name:'Events',
                },
                {
                    name:'Innovation',
                },
                {
                    name:'Environment',
                },
                {
                    name:'Technology',
                },
            ]
        }
    }
}
</script>

<style scoped lang='scss'>
nav{
    display: flex;
    justify-content: space-around;
    color: #babdbe;
    width:70%;
    margin: 4em auto;
    text-transform: uppercase;
    .navbar-item{
        padding: .3em .6em;
        &:hover{
        background-color:rgba(3, 132, 132, 0.25);
        border-radius: 5px;
        }
    }
    
}
</style>