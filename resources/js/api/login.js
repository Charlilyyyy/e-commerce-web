import requests from './requests'

export const getRegister = () => requests.requests({
    url:'/register',
    method: 'post'
})