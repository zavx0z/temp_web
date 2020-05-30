import header from "./utils/headerWithToken"
import api from "./api/api"

export default (url, data) => {
    return fetch(api.root + url, {
        headers: header(),
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(res => res.error ? Promise.reject(res.error) : res)
        .catch((e) => {
            if (typeof e === "string") return Promise.reject(e)
            return Promise.reject('Что-то пошло не так! Попробуйте позже.')
        })
}