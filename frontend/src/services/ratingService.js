import axios from 'axios'

import baseURL from './baseUrl'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosRatings = () => axios.create({
    baseURL: baseURL + '/ratings',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosRatings().get('/:username/index')
}

const add = (newRating) => {
    return axiosRatings().post('/add', newRating)
}

const remove = (id) => {
    return axiosRatings().delete(`/${id}/remove` )
}

const edit = (id, formData) => {
    return axiosRatings().patch(`/${id}/edit`, formData )
}

const findOne = (id) => {
    return axiosRatings().get(`/${id}`)
}

const all = () => {
    return axiosRatings().get('/' )
}

const services = {
    index,
    add,
    remove,
    edit,
    findOne,
    all
}

export default services