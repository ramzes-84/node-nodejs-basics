import { createReadStream } from "node:fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const readStream = createReadStream(
    "./src/hash/files/fileToCalculateHashFor.txt",
    { encoding: "utf8" }
  );
  const hash = createHash("sha256");

  readStream.on("readable", () => {
    const data = readStream.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
