const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
let recipesFiltered = []

for(let i = 0; i < 6; i++){
    recipesFiltered.push(recipes[i])
}

    //console.log(recipesFiltered.length)

    return res.render("home", {items: recipesFiltered})
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: recipes})
})

server.get("/recipes/:index", function(req, res){
    const { index: recipeIndex } = req.params

    const recipe = recipes[recipeIndex]

    if(!recipe) return res.send("Recipe not found!")   
    return res.render("recipe", { item: recipe})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.listen(3000, function(){
    //console.log("Server is runing!")
})

