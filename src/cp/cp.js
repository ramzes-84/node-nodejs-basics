import { fork } from "node:child_process";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const child = fork(__dirname + "/files/script.js", args, { silent: true });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["one", "two", "three"]);
