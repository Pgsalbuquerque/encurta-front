import axios from 'axios'

const api = axios.create({
  baseURL: 'https://encurta-back.herokuapp.com/'
})

export default api
