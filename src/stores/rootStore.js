import root from "../models/root"
import {sio} from "../request/SIO"

export default root.create({}, {sio: sio})