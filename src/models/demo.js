export default{
    namespace:'demo',
    state:{
        name:'',
    },
    reducers:{
        changerName(state,{payload}){
            return{
                ...state,
                name:payload.key1,
            }
        }
    },
    effects:{

    }
}