//import file module
const fs = require('fs');
//import axios to get the rss feed
const axios = require('axios');
// import json parser
var parser = require('xml2json');

async function save(req, res) {
  
    let feed = await axios.get(req.siteRssUrl);
    const file = fs.createWriteStream(req.xmlFileName);
    return new Promise(async function (resolve, reject) {
      
      fs.writeFile('./'+req.xmlFileName,feed.data, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(req.xmlFileName);
        }
      });
  
  
    });
  
  }

async function saveXml(req) {
    let savesFile = await save({
        siteRssUrl: req.siteRssUrl,
        xmlFileName: req.xmlFileName
      });
      let f = fs.readFileSync(savesFile, 'utf8');
  let json = parser.toJson(f);
  return JSON.parse(json);
}

 
    module.exports = {  saveXml };