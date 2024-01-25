import { readdir, mkdir, copyFile } from "node:fs/promises";

const copy = async () => {
  const dirСonsistency = await readdir("./src/fs/");
  const isFilesDir = dirСonsistency.includes("files");
  const isFilesCopyDir = dirСonsistency.includes("files_copy");

  if (!isFilesDir || isFilesCopyDir) {
    throw new Error("FS operation failed");
  } else {
    await mkdir("./src/fs/files_copy");
    const dirСonsistency = await readdir("./src/fs/files");
    dirСonsistency
      .filter((item) => item.includes("."))
      .forEach((fileName) => {
        copyFile(
          `./src/fs/files/${fileName}`,
          `./src/fs/files_copy/${fileName}`
        );
      });
  }
};

await copy();
