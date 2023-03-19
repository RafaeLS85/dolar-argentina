import { ambitoUrl } from "../../constants/constants";
import puppeteer from 'puppeteer'

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(ambitoUrl);

  const data = await page.evaluate(() => {
    const div = Array.from(document.querySelectorAll("div.col")); 
    return div.map((h2) => h2.textContent.trim());
  });

  await browser.close();

  res.status(200).json({ data:  getDollarBlue(data[1]) });
}

function getDollarBlue(data){
    const info = data.substring(0,83)
    if(info.includes('Blue')){
        return info.trim()
    }else{
        return 'Error: Dollar Blue not found'
    }
}
