const path = require("path")
const fs = require("fs")
const fetch = require("node-fetch")
const csv = require("csvtojson")

const OUT_PUT_PATH = path.resolve(__dirname, "../data/contents.json")
const SPREAD_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMKzdZtxrE-nplBQFuPVu5yRWu8UNNZ_u7qymTej4C0eb6PE9uJlMIi-JCD-sn6PC4uYfsEMdsoXmT/pub?gid=0&single=true&output=csv"

const main = async () => {
  console.log("Start to fetch data.")
  try {

    const responce = await fetch(SPREAD_SHEET_URL)
    const csvStr = await responce.text()
    const data = await csv({}).fromString(csvStr)
    const json = JSON.stringify(data, null, 2)
    fs.writeFileSync(OUT_PUT_PATH, json)

    console.log("Succeeded to fetch data.")
  } catch (error) {
    console.log("Failed to fetch data.")
    console.log(error)
  }
}

main()
