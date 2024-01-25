const parseArgs = () => {
  const allArgs = process.argv.slice(2);
  if (allArgs.length === 0) return;
  let output = "";
  allArgs.forEach((item, index, arr) => {
    if (index === 0) {
      output += `${item.slice(2)} is ${arr[index + 1]}`;
    } else if (index % 2 === 0) {
      output += `, ${item.slice(2)} is ${arr[index + 1]}`;
    } else return;
  });
  console.log(output);
};

parseArgs();
