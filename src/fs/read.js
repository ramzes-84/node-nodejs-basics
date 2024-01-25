import { readdir, readFile } from "node:fs/promises";

const read = async () => {
  const dirСonsistency = await readdir("./src/fs/files");
  const isfileToRead = dirСonsistency.includes("fileToRead.txt");

  if (!isfileToRead) {
    throw new Error("FS operation failed");
  } else {
    const content = await readFile("./src/fs/files/fileToRead.txt");
    console.log(content.toString());
  }
};

await read();
