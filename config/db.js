import pg from "pg"
const {Pool} = pg
const pool = new Pool({
    user: "postgres",
    password: "1423",
    host: "localhost",
    port: 5432,
    database: "asn1"
})

export default pool