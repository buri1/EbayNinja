const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");
const app = express();


//This Route does not work, the working route is located in scraperroutes.js

const router = express.Router();

router.post("/results/:SearchUrl", (req, res) => {
  axios(`https://www.ebay-kleinanzeigen.de/${req.params.SearchUrl}/k0`)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const listings = [];

      $(".lazyload-item", html).each(function () {
        const AdTitle = $(this).find(".ellipsis").text();
        const AdImg = $(this).find(".aditem-image div").attr("data-imgsrc");
        const AdDescription = $(this)
          .find(".aditem-main--middle--description")
          .text()
          .replace(/\n/g, "");
        const AdTime = $(this)
          .find(".aditem-main--top--right")
          .text()
          .replace(/\n/g, "");
        const AdPlace = $(this)
          .find(".aditem-main--top--left")
          .text()
          .replace(/\n/g, "");
        const AdUrl = $(this).find(".ellipsis").attr("href");
        const AdPrice = $(this)
          .find(".aditem-main--middle--price")
          .text()
          .replace(/\n/g, "");
        const AdUrlFinished = "https://www.ebay-kleinanzeigen.de" + AdUrl;

        listings.push({
          AdTitle,
          AdImg,
          AdDescription,
          AdTime,
          AdPlace,
          AdPrice,
          AdUrlFinished,
        });
      });
      // console.log(listings)
      res.json(listings);
     
    })
    .catch((err) => console.log(err));
});

// router.post("/results/1/:id", (req, res) => {
//   axios(`https://www.ebay-kleinanzeigen.de/${req.params.id}/k0`)
//     .then((response) => {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       const listings = [];

//       $(".lazyload-item", html).each(function () {
//         const AdTitle = $(this).find(".ellipsis").text();
//         const AdImg = $(this).find(".aditem-image div").attr("data-imgsrc");
//         const AdDescription = $(this)
//           .find(".aditem-main--middle--description")
//           .text()
//           .replace(/\n/g, "");
//         const AdTime = $(this)
//           .find(".aditem-main--top--right")
//           .text()
//           .replace(/\n/g, "");
//         const AdPlace = $(this)
//           .find(".aditem-main--top--left")
//           .text()
//           .replace(/\n/g, "");
//         const AdUrl = $(this).find(".ellipsis").attr("href");
//         const AdPrice = $(this)
//           .find(".aditem-main--middle--price")
//           .text()
//           .replace(/\n/g, "");
//         const AdUrlFinished = "https://www.ebay-kleinanzeigen.de" + AdUrl;

//         listings.push({
//           AdTitle,
//           AdImg,
//           AdDescription,
//           AdTime,
//           AdPlace,
//           AdPrice,
//           AdUrlFinished,
//         });
//       });
//       // console.log(listings)
//       res.json(listings);
//     })
//     .catch((err) => console.log(err));
// });

module.exports = router;
