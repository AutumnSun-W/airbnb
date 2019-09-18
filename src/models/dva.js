export default{
    namespace:'user',
    state:{
        loginMod:false,
        registerMod:false,
        registerPhoneColor:'',
        registerPhoneText:'none',
        registerVerificationColor:'',
        registerVerificationText:'none',
        loginPhoneColor:'',
        loginPhoneText:'none',
        loginVerificationColor:'',
        loginVerificationText:'none',
        ophelp:'none',
        helpHome:'block',
        help:'none',
        searchHome:'block',
        search:'none',
        
    },
    reducers:{
        change(state,{payload}){
            return{...state,...payload}
        }
    },
    effects:{
        
    }

}