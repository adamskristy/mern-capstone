const baseURL = 
    process.env === 'development'
    ?
    'http://localhost:8080'
    :
    process.env.REACT_APP_BASE_URL

export default baseURL
