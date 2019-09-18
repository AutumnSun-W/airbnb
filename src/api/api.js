import * as API from './index'

export default{
    register:(params)=>{
        return API.POST('/api/v1/auth/reg', params)
    },
    login:(params)=>{
        return API.POST("/api/v1/auth/login", params)
    }
}