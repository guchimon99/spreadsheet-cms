const fs = require("fs")
const path = require("path")
const pug = require("pug")

const TEMPLATE_PATH = path.resolve(__dirname, "../src/templates/_contents.pug")
const OUT_PUT_BASE_PATH = path.resolve(__dirname, "../public/contents")

const compile = pug.compileFile(TEMPLATE_PATH)

module.exports = function buildContentPages(contents) {
  const buildPage = data => {
    const html = compile(data)
    const outputPath = path.resolve(OUT_PUT_BASE_PATH, `${data['番号']}.html`)
    fs.writeFileSync(outputPath, html)
  }

  contents.forEach(buildPage)
}
