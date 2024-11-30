import express from 'express'

const app = express()

const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
    
    res.send("Welcome to node azure cicd")
})

app.get('/about', (req, res) => {

res.json({
    
    message: "This is a simple node message",
    developer: "Kashish Yadav"
    })
})

app.listen(PORT, '0.0.0.0', ()=> {
    console.log(`server is running on ${PORT}`)

})