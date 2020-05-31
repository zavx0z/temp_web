import {types} from "mobx-state-tree"

export default types
.model({
    id: types.identifierNumber,
    name: types.string,
    watch: types.number
})