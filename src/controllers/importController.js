const controller = {}


// import services
const fileService = require('../services/fileService');
const importService = require('../services/importService');
const articleService = require('../services/articleService');


controller.list = async (req, res) => {
  const list = await articleService.list();
  res.json(list);

}

controller.create = async (req, res) => {
  let content = await fileService.saveXml({
    siteRssUrl: req.body.siteRssUrl,
    xmlFileName: 'rss.xml'
  });
  try {
    let imports = await importService.save(content);
    console.log(imports);
    let logestWord = await articleService.save(content);
    res.json({ success: true, message: 'created successful',logestWord });
  } catch (e) {
    console.log(e);
  }

}

module.exports = controller;

