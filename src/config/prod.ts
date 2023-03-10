export default {
    stage : "production",
    env : process.env.NODE_ENV,
    port : process.env.PORT, //on prod -> may be it can come from env or another suitable port
    secrets : {
        jwt : process.env.JWT_SECRET,
        dbUrl : process.env.DATABASE_URL
    }
}