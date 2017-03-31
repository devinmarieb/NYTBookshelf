const Server = require('./server.js')
// const port = (process.env.PORT || 8080)
const app = Server.app()

app.listen(process.env.PORT || 5000)
// console.log(`Listening at http://localhost:${port}`)
