import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosUser = () => axios.create({
    baseURL: 'http://localhost:8080/rate-my-tutorial/users',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const info = () => {
    return axiosUser().get('/profile')
}

const services = {
    info
}

export default services