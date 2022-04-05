<template>
  <main>
      <section id='about'>
            <list-about/>
      </section>
      <section id='company'>
            <div class="container-text">
                <div class="subtitle">About the network</div>
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
          <div class="width-1200">
                <div class="subtitle">We do more for everyone</div>
                <h2 class="title"> Actions 	&amp; <span class='green-text'>Projects</span></h2> 
                <projects-navbar/>
                <div class="projects-container">

                </div>
          </div>
      </section>
  </main>
</template>

<script>
import ListAbout from './main/ListAbout.vue';
import GreenBtn from './buttons/GreenBtn.vue'
import AppBtn from './buttons/AppBtn.vue';
import CountingCard from './main/CountingCard.vue';
import ProjectsNavbar from './main/ProjectsNavbar.vue';

export default {
    name: 'AppMain',
    data(){
        
        return{
            arrEmployees:['Eric Giordano', 'Marina D\'Angelo', 'Pablo Escobar','Lucas Film'],
            arrPartners:[],
            arrCustomers:[],
            projectArr:[
                {
                    project:'Academic professional program in social media',
                    img:'',
                },
                {
                    project:'President\'s speech at the annual meeting',
                    img:'',
                },
                {
                    project:'International business trip in Shanghai',
                    img:'',
                },
                {
                    project:'Technology workshop with education theme',
                    img:'',
                },
                {
                    project:'Donation of clothes and food to the partner NGO',
                    img:'',
                },
                {
                    project:'Confraternization of the procurement team',
                    img:'',
                },
            ]
        }
    },
    components:{
        ListAbout,
        GreenBtn,
        AppBtn,
        CountingCard,
        ProjectsNavbar }
    
}
</script>

<style scoped lang='scss'>
p{
    font-size: 1.3em;
    
}
.title{
    font-size: 4em;
    font-weight: 800;
    padding: 1.5rem 0;
}
#about{
    background-color: #e4eae6;
}
#company{
    display: flex;
    justify-content: flex-end;
    align-items: stretch;

    .container-text{
        max-width: 600px;
        width: 35%;
        padding: 7em 0; 
        padding-right: 2em;
        align-self: center;
        .green-text{
            color: #038483;
            background-color:#CCE3DE;
            padding:0 .8rem;
            border-radius: 5px;
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
}
#action{
    padding: 3em;
    text-align: center;
    background-color: black;
    .title{
        padding: 0;
        color: white;
        .green-text{
            background-color: rgba(3, 132, 132, 0.25);
            border-radius: 5px;
            padding:0 .8rem;
            
        }
    }
}
</style>