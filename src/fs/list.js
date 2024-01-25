import { readdir } from "node:fs/promises";

const list = async () => {
  const dirСonsistency = await readdir("./src/fs/");
  const isFilesDir = dirСonsistency.includes("files");

  if (!isFilesDir) {
    throw new Error("FS operation failed");
  } else {
    const dirСonsistency = await readdir("./src/fs/files");
    dirСonsistency.forEach((fileName) => console.log(fileName));
  }
};

await list();
