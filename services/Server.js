import axios from 'axios'

const SERVER = axios.create({
  baseURL: 'http://localhost:1337',
})

export default SERVER
