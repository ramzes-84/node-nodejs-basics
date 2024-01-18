import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  const reading = createReadStream("./src/zip/files/fileToCompress.txt", {
    encoding: "utf8",
  });
  const writing = createWriteStream("./src/zip/files/archive.gz");
  const zipping = createGzip();
  pipeline(reading, zipping, writing, (err) => {
    if (err) {
      process.exitCode = 1;
    }
  });
};

await compress();
