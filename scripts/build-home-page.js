const fs = require("fs")
const path = require("path")
const pug = require("pug")

const TEMPLATE_PATH = path.resolve(__dirname, "../src/templates/_index.pug")
const OUT_PUT_PATH = path.resolve(__dirname, "../public/index.html")

const compile = pug.compileFile(TEMPLATE_PATH)

module.exports = function buildContentPages(contents) {
  const html = compile({ contents })
  fs.writeFileSync(OUT_PUT_PATH, html)
}
