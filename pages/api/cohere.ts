import { apiKey } from "../../apiKey.js";

const cohere = require("cohere-ai");
cohere.init(apiKey, "2021-11-08");

cohere.init(apiKey);

const coGenerate = async (prompt: string) => {
  const response = await cohere.generate({
    prompt: prompt,
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
};

export default coGenerate;
