import { createWriteStream } from "node:fs";

const write = async () => {
  const stream = createWriteStream("./src/streams/files/fileToWrite.txt", {
    encoding: "utf8",
  });

  process.stdout.write(
    "Hello!\nYou can write some data below\nPlease press Ctrl + C to exit\n"
  );
  process.stdin.pipe(stream);
  process.stdin.resume();
};

await write();
