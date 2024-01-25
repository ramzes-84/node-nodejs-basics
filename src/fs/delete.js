import { readdir, rm } from "node:fs/promises";

const remove = async () => {
  const dirСonsistency = await readdir("./src/fs/files");
  const isfileToRemove = dirСonsistency.includes("fileToRemove.txt");

  if (!isfileToRemove) {
    throw new Error("FS operation failed");
  } else {
    await rm("./src/fs/files/fileToRemove.txt");
  }
};

await remove();
