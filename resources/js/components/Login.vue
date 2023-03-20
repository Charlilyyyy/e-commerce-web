<template>
    <section class="all">
        <div class="first-section text-center">
            <Navbar/>
        </div>
        <div class="second-section">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <div class="card  rounded-0">
                        <div class="bg-primary text-white fw-bold card-header">Login to your account</div>
                        <form method="post" action="/register">
                            <div class="row mx-2 my-2">
                                <div class="col-3 ">
                                    <label>Username: </label>
                                </div>
                                <div class="col">
                                    <input v-model="model.username" type="text" name="username" placeholder="Enter your preferred username" size="40"/>
                                </div>
                            </div>
                            <div class="row mx-2 my-2">
                                <div class="col-3 ">
                                    <label>Password: </label>
                                </div>
                                <div class="col">
                                    <input v-model="model.password" type="password" name="password" placeholder="Enter your preferred password" size="40"/>
                                </div>
                            </div>
                            <div class="text-center my-2">
                                <button type="button" class="btn btn-success" @click="loging()">Register</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </section>
    {{ model }}
    <!-- <button @click="loging()">fcvgbh</button> -->
</template>

<script>
import Navbar from './layouts/Navbar.vue';
// import { mapGetters } from "vuex";
// import axios from 'axios';


export default {
    name:'Login',
    data(){
        return{
            model:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        loging(){
            this.$store.dispatch("login/getRegister",this.model);
            // console.log('hi');
        }
    },
    components:{
        Navbar
    }
}
</script>

<style>
    .all{ 
        overflow: hidden;
        /* height: 1500px; */
    }

    .first-section{
        /* height: 100px; */
        position: relative;
        top: 0px;
        z-index: 1;
    }

    .second-section{
        margin-top:200px
    }
</style>