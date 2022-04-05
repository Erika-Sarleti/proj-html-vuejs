<template>
    <ul class="width-1200">
        <single-card v-for='(item, index) in aboutArr' :key='index'
        :about-info='item'/>
    </ul>
</template>

<script>
import SingleCard from './SingleCard.vue'
export default {
    name: 'ListAbout',
    components:{
        SingleCard,
    },
    data(){
        return{
            aboutArr:[
                {
                    icon: require('../../assets/img/user-group-solid.svg'),
                    title: 'Human Capital',
                    p: 'Humanizing Business: Harness the power of technology to improve the way people work.',

                },
                {
                    icon: require('../../assets/img/chart-pie-solid.svg'),
                    title: 'Human Capital',
                    p: 'Humanizing Business: Harness the power of technology to improve the way people work.',

                },
                {
                    icon: require('../../assets/img/gauge-high-solid.svg'),
                    title: 'Human Capital',
                    p: 'Humanizing Business: Harness the power of technology to improve the way people work.',

                },
            ]
        }
    }
}
</script>

<style scoped lang='scss'>
@import '../../assets/styles/styles.scss';
ul{
    padding: 6em 0;
    display: flex;
    justify-content: space-between;
}
    
</style>