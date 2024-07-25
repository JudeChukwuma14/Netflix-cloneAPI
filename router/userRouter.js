const { addLiskedMovies } = require("../controller/userController")


const router = require("express").Router()

router.post("/add", addLiskedMovies)
module.exports = router