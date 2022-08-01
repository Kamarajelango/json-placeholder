const http = require("http")
const PORT = 3001
const fs = require("fs")



const users = require("./data/users.json")
const post = require("./data/post.json")
const comments = require("./data/comments.json")

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/users") {
            res.end(JSON.stringify(users))
        } else if (req.url === "/post") {
            res.end(JSON.stringify(post))
        } else if (req.url === '/comments') {
            res.end(JSON.stringify(comments))
        } else if (req.url === '/sample-text') {
            return fs.readFile("./data/sample.txt", "utf-8", (err, data) => {
                if (err) {
                    res.end("Error reading data...!")
                } else {
                    return res.end(data)
                }
            })
        }
    }
    res.end("Welcome to back end!")
})

server.listen(PORT, console.log(`server is running port-${PORT}`))