import http from '../utils/http'
export default{
    phone(phone){
        return http.post('/user/phone'),{
            phone
        }
    }
}