const tims = require("./dist/index")

const day = 1000 * 60 * 60 * 24 + 1

describe("Tims.js", () => {
  test("translations", () => {
    expect(tims.duration(day, { locale: "fr" }).includes("jour")).toBeTruthy()
    expect(tims.duration(day * 2, { locale: "en" }).includes("days")).toBeTruthy()
  })
})