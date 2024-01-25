const parseEnv = () => {
  const allEnvKeys = Object.keys(process.env);
  const rssKeys = allEnvKeys.filter((key) => key.startsWith("RSS_"));
  if (rssKeys.length === 0) return;
  let output = "";
  rssKeys.forEach((key, index) => {
    if (index === 0) {
      output += `${key}=${process.env[key]}`;
    } else {
      output += `; ${key}=${process.env[key]}`;
    }
  });
  console.log(output);
};

parseEnv();
