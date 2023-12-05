const { default: puppeteer } = require("puppeteer")
const { generateText, checkAndGenerate } = require("./util")

test('generate texts', () => {
  const text = generateText('Max', 29)
  expect(text).toBe('Max (29 years old)')
})

test('should output data-less', () => {
  const text = generateText('', null)
  expect(text).toBe(' (null years old)')
})

test('should output data-less', () => {
  const text = generateText()
  expect(text).toBe('undefined (undefined years old)')
})

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29)
  expect(text).toBe('Max (29 years old)')
})

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: 80,
    // args: ['--window-size=1920,1080']
  })

  const page = await browser.newPage()
  await page.goto(('file:///run/user/1000/doc/d9400545/index.html'))
  await page.click('input#name')
  await page.type('input#name', 'Anna')
  await page.click('input#age')
  await page.type('input#age', '28')
  await page.click('#btnAddUser')
  const textOutput = await page.$eval('.user-item', el => el.textContent)
  expect(textOutput).toBe('Anna (28 years old)')
}, 10000)