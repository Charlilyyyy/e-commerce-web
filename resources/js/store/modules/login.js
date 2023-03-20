import { getRegister } from "../../api/login";

export default {
    namespaced: true,
    state(){
        return{
            register:[]
        };
    },
    getters:{
        register(state){
            return state.maindatas;
        },
        // isMaindatasExists(state){
        //     return state.maindatas.length !== 0;
        // }
    },
    actions: {
        async getRegister({commit}) {
            let response = await getRegister();
            commit("SET_REGISTER", response);
            console.log(response);
        }

        // async getMainDatas = ({ commit },payload) => {
        //     let url = `/`;
        
        //     axios.post(url, payload).then( res => {
        //         commit('SET_MAINDATAS', res.data);
        //     });
        // }
    },
    mutations: {
        SET_REGISTER(state, responseRegister) {
            state.register = responseRegister;
        }
    }
}