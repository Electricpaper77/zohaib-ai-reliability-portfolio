import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(".");
const port = Number.parseInt(process.env.PORT || "4173", 10);
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8"
};

function resolveRequestPath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = decodedPath === "/" ? "/index.html" : decodedPath;
  const normalized = normalize(requested).replace(/^(\.\.[/\\])+/, "");
  let filePath = resolve(join(root, normalized));

  if (!filePath.startsWith(root + sep) && filePath !== root) {
    return null;
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  } else if (!existsSync(filePath) && existsSync(filePath + ".html")) {
    filePath = filePath + ".html";
  } else if (!existsSync(filePath) && existsSync(join(filePath, "index.html"))) {
    filePath = join(filePath, "index.html");
  }

  return filePath;
}

const server = createServer((req, res) => {
  if (!req.url) {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }

  if (req.url === "/portfolio" || req.url === "/portfolio/") {
    res.writeHead(308, { Location: "/" });
    res.end();
    return;
  }

  const filePath = resolveRequestPath(req.url);
  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`Portfolio hub running at http://${host}:${port}/`);
});
