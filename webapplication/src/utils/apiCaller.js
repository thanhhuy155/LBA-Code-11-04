import axios from 'axios'
import * as Config from '../constraints/Config'

const callAPI= async (endpoint, method='GET',body) =>{
    return await axios({
    // headers:{
    //     Authorization: localStorage.getItem ('Token')?localStorage.getItem('Token'):null
    // },
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body
      }).then (async reg=> await reg.data).catch(err=>{
        console.log ('Error from Webservice: ', err)
        return {
                data:{},
                message:{
                    success: false,
                    error: 'Something was wrong with Webservice'
                }
            }
    });
}

export default callAPI;