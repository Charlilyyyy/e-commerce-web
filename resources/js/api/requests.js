import axios from 'axios'
// import { requestInterceptorSetting } from '@com/api/requestInterceptorSetting.js'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: window.location.protocol+"//"+window.location.host+"/",
    timeout: 20000
})

// requestInterceptorSetting(requests)

const multiFormRequests = axios.create({
    baseURL: window.location.protocol+"//"+window.location.host+"/",
    timeout: 20000,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
})

// requestInterceptorSetting(multiFormRequests)

export default { multiFormRequests, requests };