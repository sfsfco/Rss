//import Imports model
const Articles = require('../models/Articles');

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    let realWord = '';
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
        realWord = strSplit[i];
        longestWord = strSplit[i].length;
       }
    }
    return realWord;
  }
  


async function save(content) {
    let longestWord = '';
    content.rss.channel.item.forEach(async element => {

        let guid = (element.guid.$t !== undefined)? element.guid.$t:element.guid;
        longestWord = longestWord + findLongestWord(element.title) + ' ';

        if (await Articles.count({ where: { externalId: guid } }) == 0) {
          console.log('new article');
          Articles.create({
            externalId: guid,
            title: element.title,
            description: element.description,
            publicationDate: element.pubDate,
            link: element.link,
            mainPicture: element["media:content"].url,
          });
        } else {
          console.log('update article');
          Articles.update({
            title: element.title,
            description: element.description,
            publicationDate: element.pubDate,
            link: element.link,
            mainPicture: element["media:content"].url,
          }, { where: { externalId: guid } });
        }

      });
      return {longestWord: findLongestWord(longestWord)};
}


async function list() {
    return await Articles.findAll();
}


module.exports = { save , list ,findLongestWord};