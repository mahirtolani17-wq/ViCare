const https = require("https");
https.get("https://cdn.uploadnow.io/_next/static/chunks/20306-2301b238b24063dd.js", res => {
  let d = "";
  res.on("data", c => d += c);
  res.on("end", () => {
    const rx = /["'`](https?:\/\/[^"'`]+|\/[a-zA-Z0-9_\-\/]+)["'`]/g;
    const paths = new Set();
    let m;
    while ((m = rx.exec(d)) !== null) {
      if (m[1].length > 3 && m[1].length < 60) paths.add(m[1]);
    }
    console.log([...paths].filter(p => !p.includes("font") && !p.includes("css") && !p.includes("svg")));
  });
});
