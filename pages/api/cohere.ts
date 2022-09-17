import { COHERE_APIKEY } from "../../apiKey";
//const apiKey = process.env.COHERE_APIKEY;

const cohere = require("cohere-ai");
cohere.init(COHERE_APIKEY, "2021-11-08");

cohere.init(COHERE_APIKEY);

const coGenerate = async (prompt: string, model: string) => {
  //generate first part
  const response1 = await cohere
    .generate({
      prompt: prompt,
      model: model,
    })
    .then();

  //chain generation
  const response2 = await cohere.generate({
    prompt: prompt + response1.body.generations[0].text,
    model: model,
    frequency_penalty: 0.2,
    num_generations: 5,
  });

  // return full generated phrases
  return response2.body.generations.map(
    (gen: any) => prompt + response1.body.generations[0].text + gen.text
  );
};

export default coGenerate;
