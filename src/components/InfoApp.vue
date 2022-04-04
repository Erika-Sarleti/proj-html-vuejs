<template>
<section>
  <div class="container-info">
      <!-- Orari di lavoro -->
      <div class="open-hours">
          <font-awesome-icon icon="fa-solid fa-clock" spin />
          <span class="info-text">Open Hours: {{info.openHours}}</span>
      </div>
      <!-- Info productivity -->
      <div class="info-productivity">
          <!-- phone number -->
          <div class="phone-number info-section">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <span class="info-text">{{info.phone}}</span>
          </div>
          <!-- email -->
          <div class="email info-section">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <span class="info-text">{{info.email}}</span>
          </div>
          <!-- social -->
          
          <a class="info-section" :href="info.facebook">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
          <a class="info-section" :href="info.twitter">
            <font-awesome-icon  icon="fa-brands fa-twitter" />
          </a> 
          <a class="info-section" :href="info.linkedin">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
      </div>
  </div>
</section>
</template>

<script>
export default {
props:{
    info: Object,  
},
}
</script>

<style scoped lang='scss'>
@import '../assets/styles/styles.scss';
    section{
        background-color: #21333E;
        font-size: 14px ;
        font-weight: 300;
        
    }
    .container-info{
        padding: 1em 0;
        color:white;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
        
        margin: 0 auto;
        .info-section{
            margin-left: 30px;
            
        }
        .info-text{
                margin-left:.6rem;
        }
        .info-productivity{
            display: flex;

            a{
                color: white;
            }
        }
    }
</style>