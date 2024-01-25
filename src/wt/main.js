import { cpus } from "os";
import { Worker } from "worker_threads";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const performCalculations = async () => {
  const cpusInfoArr = cpus();
  const resultsArr = await Promise.all(
    cpusInfoArr.map((_cpu, index) => {
      return new Promise((res) => {
        const worker = new Worker(__dirname + "worker.js", {
          workerData: index + 10,
        });
        worker.on("message", (calcResult) => {
          res({ status: "resolved", data: calcResult });
        });
        worker.on("error", (calcResult) => {
          res({ status: "error", data: null });
        });
        worker.on("exit", (code) => {
          if (code !== 0)
            throw new Error(`Worker stopped with exit code ${code}`);
        });
      });
    })
  );
  console.log(resultsArr);
};

await performCalculations();
