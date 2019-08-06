export default{
    namespace:'demo3',
    state :{ 
        visible: false,
        ID: 0,
        data : [
        ],
        columns : [
        ]
    },
    reducers:{
        changerID(state,{payload}){
            return{
                ...state,
                data:payload.ID,
               
            }
        }
    },
    effects:{

    }
}