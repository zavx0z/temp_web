export default {
    root: `${process.env.REACT_APP_HOST}/api`,
    get runTask() {
        return `${this.root}/task`
    }
}
