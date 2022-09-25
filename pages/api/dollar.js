const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.ambito.com/contenidos/dolar.html');
    // await page.screenshot({path: 'example.png'});

    // const n = await page.$("#loc")

    const data = await page.evaluate(() => {
      const h2 = Array.from(document.querySelectorAll('.title-wrapper.mr-2 h2')) 
      return h2.map(h2 => h2.textContent)
  });

  // d-flex flex-row align-items-end align-items-md-center w-100

   console.log(data) // titulos h2: Dolar turista, dolar blue, dolar mep...
  
    await browser.close();


    res.status(200).json({ titles: data })

}



