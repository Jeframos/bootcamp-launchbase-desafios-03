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
    return res.render("home", {items: recipes})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    const recipesFiltered = []

    for(let i = 0; i < 6; i++){
        const obj = recipes[i]
        obj.index = i
        recipesFiltered.push(obj)
    }

    return res.render("recipes", {items: recipes})
})

server.get("/recipes/:index", function(req, res){
    const { index: recipeIndex } = req.params

    const recipe = recipes[recipeIndex]

    if(!recipe) return res.send("Recipe not found!")   
    return res.render("recipe", { item: recipe})
})

server.listen(3000, function(){
    //console.log("Server is runing!")
})

