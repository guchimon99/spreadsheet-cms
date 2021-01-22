const contents = require("../data/contents.json")

const buildHomePage = require("./build-home-page")
const buildContentPages = require("./build-content-pages")

buildHomePage(contents)
buildContentPages(contents)
