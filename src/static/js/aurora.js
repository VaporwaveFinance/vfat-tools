$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Aurora Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
        ["Trisolaris ",            `<a href="trisolaris"       >Various</a>`,      "TRI",           "https://www.trisolaris.io" ],
        ["NearPad ",               `<a href="nearpad"          >Various</a>`,      "NearPad",       "https://nearpad.io" ],
        ["Vaporwave Finance ",     `<a href="vaporwave"        >Various</a>`,      "VWAVE",         "https://vaporwave.farm" ],
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
