const requestPromise = require("request-promise");
const $ = require("cheerio");
const fs = require("fs");
const url =
  "https://en.wikipedia.org/wiki/List_of_skeletal_muscles_of_the_human_body";

requestPromise(url)
  .then(function (html) {
    let anatomyArray = [];
    $("table.wikitable", html).map((i, h_node) => {
      $(h_node)
        .find("tr")
        .map((j, row) => {
          console.log($(row).text());
          console.log(j);
        });
    });
    //    console.log(htmlFile);
    // let finalHTML = Object.values(htmlFile);
    // finalHTML.toString();
    // console.log(finalHTML);
    // fs.writeFileSync("./data.txt", anatomyArray, "utf-8");
  })
  .catch(function (err) {
    //handle error
    console.log(err);
  });

// Showing how to turn array into object 😺
function toObject(inArr) {
  // Simple way with slice
  let outObj = { [inArr[0]]: inArr.slice(1) };
  return outObj;
}

function toObjectMutatie(inArr) {
  // or you could do it using shift to pull the first element out
  // However, this mutates inArr
  let outObj = { [inArr.shift()]: inArr };
  return outObj;
}

// There you go!
