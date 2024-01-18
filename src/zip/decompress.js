import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const reading = createReadStream("./src/zip/files/archive.gz");
  const writing = createWriteStream("./src/zip/files/fileToCompress.txt");
  const unzipping = createUnzip();
  pipeline(reading, unzipping, writing, (err) => {
    if (err) {
      process.exitCode = 1;
    }
  });
};

await decompress();
