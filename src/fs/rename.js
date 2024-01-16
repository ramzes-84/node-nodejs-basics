import { readdir, rename as nodeRename } from "node:fs/promises";

const rename = async () => {
  const dirСonsistency = await readdir("./src/fs/files");
  const isWrongFilename = dirСonsistency.includes("wrongFilename.txt");
  const isProperFilename = dirСonsistency.includes("properFilename.md");

  if (!isWrongFilename || isProperFilename) {
    throw new Error("FS operation failed");
  } else {
    await nodeRename(
      "./src/fs/files/wrongFilename.txt",
      "./src/fs/files/properFilename.md"
    );
  }
};

await rename();
