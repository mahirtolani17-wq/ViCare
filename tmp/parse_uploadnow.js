const https = require("https");

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

async function main() {
  const html = await get("https://uploadnow.io/files/SsVKzfN");
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (match) {
    const data = JSON.parse(match[1]);
    console.log("Full NEXT DATA keys:", Object.keys(data));
    console.log("pageProps keys:", Object.keys(data.props.pageProps));
    console.log(JSON.stringify(data.props.pageProps, (k, v) => (typeof v === 'string' && v.length > 80 ? v.slice(0, 80) + '...' : v), 2));
  }
}

main().catch(console.error);
