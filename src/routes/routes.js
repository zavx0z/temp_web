import authenticate from "../features/secure/routes"

export default {
    home: "/",
    ...authenticate,
}