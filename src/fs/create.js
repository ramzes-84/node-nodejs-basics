import { writeFile, readdir } from "node:fs/promises";

const create = async () => {
  const dirFiles = await readdir("./src/fs/files/");
  if (dirFiles.includes("fresh.txt")) {
    throw new Error("FS operation failed");
  } else {
    writeFile("./src/fs/files/fresh.txt", "I am fresh and young");
  }
};

await create();
