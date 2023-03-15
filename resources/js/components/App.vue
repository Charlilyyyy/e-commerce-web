<template>
    <section class="all">
        <div class="first-section text-center">
                <Navbar/>
                
                        <img style="height: 300px;margin-top: 180px; margin-bottom: 70px;"  src="../../../public/images/c.png"/>
                    
                
                <h2 class="text-center fw-bold my-title ">Welcome to my demo ecommerce shop</h2>
        </div>
    </section>
</template>

<script>
import Navbar from './layouts/Navbar.vue'

export default {
    name: 'App',
    data(){
        return{

        }
    },
    components:{
        Navbar
    }
}
</script>

<style scoped>
    

    .all{
        
        overflow: hidden;
    }

    .first-section{
        /* height: 1100px; */
        position: relative;
        top: 0px;
    }

    

    .my-title{
        animation-name: my-title;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    @keyframes my-title{
        0% {
            color:#7b3f00;
            /* top: 10%;
            left: 35%; */
        }
        25% {
            color: #f3e5ab;
            /* top: 15%;
            left: 40%; */
        }
        50% {
            color:#7b3f00;
            /* top: 20%;
            left: 45%;  */
        }
        75% {
            color: #f3e5ab;
            /* top: 25%;
            left: 40%; */
        }
        100% {
            color: #7b3f00;
            /* top: 35%;
            left: 35%; */
        }
    }
</style>