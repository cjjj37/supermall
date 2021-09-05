import axios from 'axios'

export function request(config){
  const instantce=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000    
  })


instantce.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err);
  }
)

instantce.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    console.log(err);
  }
)

return instantce(config)

}