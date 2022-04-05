<template>
  <main>
      <section id='about'>
            <list-about/>
      </section>
      <section id='company'>
            <div class="container-text">
                <div class="subtitle">Human Resources</div>
                <h2 class="title"> <span class='green-text'>The</span>  Company </h2> 
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis possimus, sequi, molestiae placeat sunt asperiores </p>            
                <div class='container-count'>
                    <counting-card
                    :number-of='arrEmployees'
                    name='Employees'
                    subtitle='lorem ipsum dolor sin amet'/>
                    <counting-card
                    :number-of='arrPartners'
                    name='Partners'
                    subtitle='lorem ipsum dolor sin amet'/>
                    <counting-card
                    :number-of='arrCustomers'
                    name='Customers'
                    subtitle='lorem ipsum dolor sin amet'/>
                </div>
                <app-btn
                cta='Get in touch'/>
                <green-btn
                cta='Read more'/>
            </div>
            <img class="img-company" src="../assets/img/about-5.jpg" alt="">
            
      </section>
      <section id='action'>

      </section>
  </main>
</template>

<script>
import ListAbout from './main/ListAbout.vue';
import GreenBtn from './buttons/GreenBtn.vue'
import AppBtn from './buttons/AppBtn.vue';
import CountingCard from './main/CountingCard.vue';

export default {
    name: 'AppMain',
    components:{
        ListAbout,
        GreenBtn,
        AppBtn,
        CountingCard  },
    data(){
        return{
            arrEmployees:[],
            arrPartners:[],
            arrCustomers:[]
        }
    }
}
</script>

<style scoped lang='scss'>
#about{
    background-color: #e4eae6;
}
#company{
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
}
.container-text{
    max-width: 600px;
    width: 35%;
    padding: 7em 0; 
    padding-right: 2em;
    align-self: center;
    .title{
        font-size: 4em;
        font-weight: 800;
        padding: 1.5rem 0;
        .green-text{
            color: #038483;
            background-color:#CCE3DE;
            padding:0 .8rem;
            border-radius: 5px;
        }
    }
    p{
        font-size: 1.3em;
        
    }
    .container-count{
    display: flex;
    justify-content: space-between;
}
button{
    margin:1.5em 0;
    margin-right:.8rem;
  }

}

    img{
        width: 50%;
        object-fit: cover;
    }

.black{
    height: 300px;
    background-color: black;
}
</style>