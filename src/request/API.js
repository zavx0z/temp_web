import BASE_URL from "./BASE_URL"

export default {
    root: `${BASE_URL}/api`,
    get runTask() {
        return `${this.root}/task`
    }
}
