import axios from 'axios'

export function useRequest() {
    const instance = axios.create({
        baseURL: '/api'
    })

    return {
        get: instance.get,
        post: instance.post
    }
}
