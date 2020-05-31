import {flow, getEnv, types} from "mobx-state-tree"
import video from "./video"
import API from "../request/API"
import postData from "../features/secure/request/postData"

export default types
    .model({
        video: types.maybe(video),
    })
    .volatile(self => ({
        query: '',
        taskId: undefined
    }))
    .actions(self => {
        const {sio} = getEnv(self)
        return {
            afterCreate() {
                sio.on('message', message => {
                    const {id, msg} = message
                    self.setTaskId(id)
                    console.log("message", msg)
                })
            },
            setTaskId(id) {
                self.taskId = id
                console.log(self.taskId)
            },
            changeQuery(e) {
                e.preventDefault()
                self.query = e.target.value
            },
            runTask: flow(function* () {
                console.log(self.query)
                try {
                    const data = yield postData(API.runTask, {query: self.query})
                    if (data['success'] === 'ok')
                        return Promise.resolve('задача обрабатывается')
                    else return Promise.reject('что-то пошло не так')
                } catch (e) {
                    return Promise.reject(e)
                }
            })
        }
    })
