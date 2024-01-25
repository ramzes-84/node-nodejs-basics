import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(("\n" + chunk.toString()).split("").reverse().join(""));
      callback();
    },
  });
  process.stdout.write(
    "Hello!\nYou can write some data below\nPlease press Ctrl + C to exit\n"
  );
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
